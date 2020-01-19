import * as Mailgun from 'mailgun-js';
import * as Twilio from 'twilio';
import { config } from 'dotenv';

import { getTemplate } from 'tellteam-email-template';

config({ path: '/.env.local' });

if( !process.env.NODE_ENV ) process.env.NODE_ENV = 'production';

const MUTE = process.env.MUTE_NOTIFICATIONS && process.env.MUTE_NOTIFICATIONS === 'true';

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_FROM_NUMBER = '(901) 352-2292'

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = 'mg.tellteam.co.uk';
const MAILGUN_FROM = 'TellTeam <no-reply@mg.tellteam.co.uk>';

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
 * Do the action to send the SMS messages
 * @param numbers
 * @param text
 * @returns {Promise<unknown[]>|Promise<void>}
 */
const sendSMSMessages = (numbers, text) => {

    if( !numbers || !numbers.length ) return Promise.resolve();

    if( MUTE ) {
        console.log(`muted - not sending ${numbers.length} SMS messages`)
        return Promise.resolve();
    }

    const client = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    const opts = {
        body: text,
        from: TWILIO_FROM_NUMBER,
    }

    console.log('sending SMS messages to ', numbers.length)

    return Promise.all(
        numbers.map(to => (
            client.messages
                .create({
                    ...opts,
                    to
                })
                .catch(console.error)
        ))
    )

}

/**
 * Do the action to send the emails
 * @param emails
 * @param text
 * @param accountName
 * @returns {Promise<unknown>|Promise<void>}
 */
const sendEmails = (emails, text, accountName) => {

    if( !emails || !emails.length ) return Promise.resolve();

    const mailgun = Mailgun({
        apiKey: MAILGUN_API_KEY,
        domain: MAILGUN_DOMAIN,
        host: 'api.eu.mailgun.net',
    });

    const subject = 'New notification from ' + accountName;
    const optOutUrl = 'https://tellteam.co.uk'; // TODO: Need this URL

    const html = getTemplate()
        .replace("{{subject}}", subject)
        .replace("{{accountName}}", accountName)
        .replace("{{content}}", text)
        .replace("{{optOutUrl}}", optOutUrl);

    if( MUTE ) {
        console.log(`muted - not sending ${emails.length} emails`)
        return Promise.resolve();
    }

    const data = {
        from: MAILGUN_FROM,
        to: emails.join(","),
        subject,
        text,
        html,
    };

    console.log('sending emails to ', emails.length)

    return new Promise((resolve, reject) => {
        resolve();
        mailgun.messages().send(data, (error, body) => {
            console.log(error, body);
            if( error ) reject(error);
            resolve()
        });
    })

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
    const emails = userPreferences.filter(user => user.emailEnabled && !!user.email).map(user => user.email);
    const phoneNumbers = userPreferences.filter(user => user.sMSEnabled && !!user.mobileNumber).map(user => user.mobileNumber);

    // Send a notification to them by Email
    await sendEmails(emails, text, account.name);

    // Send a notification to them by SMS
    await sendSMSMessages(phoneNumbers, text);

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
