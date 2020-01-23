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

    const { id, members } = data

    // TODO: Check if members have been added
    const user = members[0];

    // TODO: Make sure they don't have preferences already for this account

    await ctx.api.gqlRequest(CREATE_NOTIFICATION_PREFERENCES, {
      data: {
        sMSEnabled: !!user.mobileNumber,
        emailEnabled: !!user.email,
      }
    }, { checkPermissions:false });

    return event;

};