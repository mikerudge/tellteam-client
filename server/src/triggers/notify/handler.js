import { config } from 'dotenv';
import * as clicksend from 'clicksend';

const path = require('path');

import { getTemplate } from 'tellteam-email-template';

config({ path: path.resolve(process.cwd(), '..', '.env.local') })

if( !process.env.NODE_ENV ) process.env.NODE_ENV = 'production';

const MUTE = process.env.MUTE_NOTIFICATIONS && process.env.MUTE_NOTIFICATIONS === 'true';

const FROM_EMAIL_ID = 8099;

/**
 * Query to get the notification and the data required
 * @type {string}
 */
const GET_NOTIFICATION_QUERY  = `
query getNotificationUsers($id: ID!) {
  notification(id: $id) {
    id
    delivered
    text
    account {
      id
      name
    }
    users {
      items {
        id
        firstName
        lastName
        mobileNumber
        email
        notificationPreferences(filter: {OR: [{emailEnabled: {equals: true}}, {sMSEnabled: {equals: true}}]}) {
          items {
            preferenceId: id
            account {
              id
            }
            emailEnabled
            sMSEnabled
          }
        }
      }
    }
  }
}
`

/**
 * Mutation to update the notification
 * @type {string}
 */
const UPDATE_NOTIFICATION_MUTATION  = `
mutation notificationUpdate(
  $data: NotificationUpdateInput!
  $filter: NotificationKeyFilter!
) {
  notificationUpdate(data: $data, filter: $filter) {
    id
    text
  }
}
`

/**
 * Simplify the user object to get the preferences
 * @param user
 * @param accountId
 * @returns {*|number|bigint|T|T}
 */
const getNotificationPreference = (user, accountId) => (
    user.notificationPreferences.items.find(pref => pref.account && pref.account.id === accountId)
)


/**
 * Do the action to send the SMS messages
 * @param users
 * @param text
 * @returns {Promise<unknown[]>|Promise<void>}
 */
const sendSMSMessages = (users, text) => {

    if( !users || !users.length ) {
        console.log("No users to send an SMS to")
        return Promise.resolve();
    }

    if( MUTE ) {
        console.log(`muted - not sending ${users.length} SMS messages`)
        return Promise.resolve();
    }

    console.log('sending SMS messages to ', users.length)

    const smsApi = new clicksend.SMSApi("owen@biglemon.co.uk", process.env.CLICKSEND_API_KEY);
    const smsCollection = new clicksend.SmsMessageCollection();
    smsCollection.messages = users.map(user => {
        const smsMessage = new clicksend.SmsMessage();
        smsMessage.source = "trigger";
        smsMessage.to = user.mobileNumber;
        smsMessage.body = text;
        return smsMessage
    })

    return smsApi
        .smsSendPost(smsCollection)
        .then(res => console.log(res.body))
        .catch(err => console.error(body));

}

/**
 * Do the action to send the emails
 * @param users
 * @param text
 * @param account
 * @returns {Promise<unknown>|Promise<void>}
 */
const sendEmails = (users, text, account) => {

    if( !users || !users.length ) {
      console.log("No users to email")
      return Promise.resolve();
    }

    if( MUTE ) {
        console.log(`muted - not sending ${users.length} emails`)
        return Promise.resolve();
    }

    console.log('sending emails to ', users.length)

    const subject = 'New notification from ' + account.name;

    const emailTransactionalApi = new clicksend.TransactionalEmailApi("owen@biglemon.co.uk", process.env.CLICKSEND_API_KEY);

    return Promise.all(
        users.map(user => {

          const preferencesId = user.preferenceId;
          const optOutUrl = process.env.PUBLIC_URL+`/notification-preferences/${preferencesId}/account/${account.id}`;

          const html = getTemplate()
            .replace("{{subject}}", subject)
            .replace("{{accountName}}", account.name)
            .replace("{{content}}", text)
            .replace("{{optOutUrl}}", optOutUrl);

          const emailRecipient = new clicksend.EmailRecipient();
          emailRecipient.email = user.email;
          emailRecipient.name = user.firstName+" "+user.lastName;

          var emailFrom = new clicksend.EmailFrom();
          emailFrom.emailAddressId = FROM_EMAIL_ID;
          emailFrom.name = account.name;

          var email = new clicksend.Email();

          email.to = [emailRecipient];
          // email.cc = [emailRecipient];
          // email.bcc = [emailRecipient];
          email.from = emailFrom;
          email.subject = subject;
          email.body = html;

          return emailTransactionalApi
            .emailSendPost(email)
            .then(res => console.log(res.body))
            .catch(err => console.error(body));

        })
    )

}

/**
 * The hook to do the SMS/email sending when notifications are made, then update it
 * @param event
 * @param ctx
 * @returns {Promise<{data: {notification: {delivered: boolean}}}|*>}
 */
export default async (event, ctx) => {

    const { data } = event;
    if( !data ) return event;

    const { id, delivered } = data;

    // Skip if it's already been delivered
    if( delivered ) return event;

    // Get the users attached to the notification, and their notification preferences
    let notification;
    let users;
    try {
        const { notification: data } = await ctx.api.gqlRequest(GET_NOTIFICATION_QUERY, { id }, { checkPermissions:false });
        if( !data ) return;
        users = data.users.items;
        notification = data;
    } catch(e) {
        console.error(e);
        return;
    }

    const { account = {}, text } = notification;

    // Format the users to their preferences
    const userPreferences = users.map(user => ({
        firstName: user.firstName,
        lastName: user.lastName,
        mobileNumber: user.mobileNumber,
        email: user.email,
        ...getNotificationPreference(user, account.id),
    }));

    // Get the user details for each group
    const emailUsers = userPreferences.filter(user => user.emailEnabled && !!user.email);
    const phoneNumberUsers = userPreferences.filter(user => user.sMSEnabled && !!user.mobileNumber);

    // Send a notification to them by Email
    await sendEmails(emailUsers, text, account);

    // Send a notification to them by SMS
    await sendSMSMessages(phoneNumberUsers, text);

    // It's not updating the delivered value for some reason, so doing it manually here
    await ctx.api.gqlRequest(UPDATE_NOTIFICATION_MUTATION, {
      data: {
        delivered: true
      },
      filter: {
        id,
      }
    }, { checkPermissions:false });

    console.log('all done!')

    // Return the notification as sent
    return {
        data: {
            ...event.data,
            delivered: true
        },
        errors: [],
    }
}
