import * as Mailgun from 'mailgun-js';
import * as Twilio from 'twilio';
import fetch from 'node-fetch';
import { config } from 'dotenv';

import { getTemplate } from 'tellteam-email-template';

config({ path: '/.env.local' });

if( !process.env.NODE_ENV ) process.env.NODE_ENV = 'production';

const MUTE = process.env.MUTE_NOTIFICATIONS && process.env.MUTE_NOTIFICATIONS === 'true';

const FROM_NUMBER = '(901) 352-2292';
const FROM_EMAIL = 'no-reply@mg.tellteam.co.uk';

/**
 * Query to get the notification and the data required
 * @type {string}
 */
const QUERY  = `
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
 * Simplify the user object to get the preferences
 * @param user
 * @param accountId
 * @returns {*|number|bigint|T|T}
 */
const getNotificationPreference = (user, accountId) => (
    user.notificationPreferences.items.find(pref => pref.account && pref.account.id === accountId)
)


/**
 * Send a Clicksend request with auth and stuff
 * @param endpoint
 * @param body
 * @returns {Promise<T | void>}
 */
const sendClicksendRequest = (endpoint, body) => {
    const method = 'POST';
    const url = 'https://rest.clicksend.com/v3/'+endpoint
    const basic = Buffer.from(`biglemon:${CLICKSEND_API_KEY}`).toString('base64');
    return fetch({
        method,
        url,
        headers: {
            Authorization: `Basic ${basic}`
        }
    })
      .then(async res => {
          const body = await res.json();
          if( !res.ok ) throw body;
          return body;
      })
      .catch(console.error)
}


/**
 * Do the action to send the SMS messages
 * @param users
 * @param text
 * @returns {Promise<unknown[]>|Promise<void>}
 */
const sendSMSMessages = (users, text) => {

    if( !users || !users.length ) return Promise.resolve();

    if( MUTE ) {
        console.log(`muted - not sending ${users.length} SMS messages`)
        return Promise.resolve();
    }

    console.log('sending SMS messages to ', users.length)

    return Promise.all(
        users
          .map(user => (
            sendClicksendRequest('sms/send', {
                from: FROM_NUMBER,
                body: text,
                to: user.mobileNumber,
                source: 'trigger'
            })
        ))
    )

    // const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    //
    // const opts = {
    //     body: text,
    //     from: FROM_NUMBER,
    // }
    //
    // return Promise.all(
    //     numbers.map(to => (
    //         client.messages
    //             .create({
    //                 ...opts,
    //                 to
    //             })
    //             .catch(console.error)
    //     ))
    // )

}

/**
 * Do the action to send the emails
 * @param users
 * @param text
 * @param accountName
 * @returns {Promise<unknown>|Promise<void>}
 */
const sendEmails = (users, text, accountName) => {

    if( !users || !users.length ) return Promise.resolve();

    const subject = 'New notification from ' + accountName;
    const optOutUrl = 'https://tellteam.co.uk'; // TODO: Need this URL

    const html = getTemplate()
      .replace("{{subject}}", subject)
      .replace("{{accountName}}", accountName)
      .replace("{{content}}", text)
      .replace("{{optOutUrl}}", optOutUrl);

    if( MUTE ) {
        console.log(`muted - not sending ${users.length} emails`)
        return Promise.resolve();
    }

    console.log('sending emails to ', users.length)

    return Promise.all(
      users.map(user => (
        sendClicksendRequest('email/send', {
            to: user.email,
            from: {
                name: accountName,
                email: FROM_EMAIL
            },
            body: html,
            name: user.firstName+' '+user.lastName,
            email: user.email,
            subject,
            content: html,
            type: 'text/html',
            content_id: '',
        })
      ))
    )

    // const mailgun = Mailgun({
    //     apiKey: process.env.MAILGUN_API_KEY,
    //     domain: 'mg.tellteam.co.uk',
    //     host: 'api.eu.mailgun.net',
    // });
    //
    // const data = {
    //     from: MAILGUN_FROM,
    //     to: emails.join(","),
    //     subject,
    //     text,
    //     html,
    // };
    //
    // return new Promise((resolve, reject) => {
    //     resolve();
    //     mailgun.messages().send(data, (error, body) => {
    //         console.log(error, body);
    //         if( error ) reject(error);
    //         resolve()
    //     });
    // })

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
        const { notification: data } = await ctx.api.gqlRequest(QUERY, { id }, { checkPermissions:false });
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
    await sendEmails(emailUsers, text, account.name);

    // Send a notification to them by SMS
    await sendSMSMessages(phoneNumberUsers, text);

    console.log('all done! returning with { delivered: true }')

    // TODO: It's not updating the delivered value for some reason

    // Return the notification as sent
    return {
        data: {
            ...event.data,
            delivered: true
        },
        errors: [],
    }
}
