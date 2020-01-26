/**
 * To invoke this function locally, run:
 *  8base invoke-local createNotificationPreferencesFromUpdatingAccountUsers -p src/triggers/createNotificationPreferencesFromUpdatingAccountUsers/mocks/request.json
 */

type TriggerResult = {
  data: {
    result: string,
  },
  errors: Array<object>,
};

/**
 * Mutation to create a notification preference object
 */
const GET_ACCOUNT_MEMBERS = `
  query getAccount($id: ID!) {
    account(id: $id) {
      id
      members {
        items {
          id
          email
          mobileNumber
          notificationPreferences(filter:{
            account:{
              id: { equals: $id }
            }
          }) {
            count
          }
        }
      }
    }
  }
`

/**
 * Mutation to create a notification preference object
 */
const CREATE_NOTIFICATION_PREFERENCES = `
  mutation notificationPreferenceCreate($data: NotificationPreferenceCreateInput!) {
    notificationPreferenceCreate(data:$data) {
      id
    }
  }
`

export default async (event: any, ctx: any) : Promise<TriggerResult> => {

    const { data } = event;
    if( !data ) return event;
    const { id } = data;

    const { account } = await ctx.api.gqlRequest(GET_ACCOUNT_MEMBERS, { id }, { checkPermissions:false });

    if( !account || !account.members?.items?.length ) return event;

    const membersWithoutPreferences = account.members.items.filter((member: any) => !member.notificationPreferences.count);

    if( !membersWithoutPreferences.length ) return event;

    await Promise.all(
      membersWithoutPreferences.map((user: any) => (
        ctx.api.gqlRequest(CREATE_NOTIFICATION_PREFERENCES, {
          data: {
            user: {
              connect: {
                id: user.id,
              }
            },
            account: {
              connect: {
                id: account.id
              }
            },
            sMSEnabled: !!user.mobileNumber,
            emailEnabled: !!user.email,
          }
        }, { checkPermissions:false })
      ))
    )

    return event;

};