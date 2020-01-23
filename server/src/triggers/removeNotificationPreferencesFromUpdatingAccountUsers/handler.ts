/**
 * To invoke this function locally, run:
 *  8base invoke-local removeNotificationPreferencesFromUpdatingAccountUsers -p src/triggers/removeNotificationPreferencesFromUpdatingAccountUsers/mocks/request.json
 */

type TriggerResult = {
  data: {
    result: string,
  },
  errors: Array<object>,
};

/**
 * Mutation to remove a notification preference object
 */
const REMOVE_NOTIFICATION_PREFERENCES = `
  mutation notificationPreferenceDelete($data: NotificationPreferenceDeleteInput!) {
    notificationPreferenceDelete(data:$data) {
      id
    }
  }
`

export default async (event: any, ctx: any) : Promise<TriggerResult> => {

  const { data } = event;
  if( !data ) return event;

  const { id, members } = data;

  // TODO: Check if members have been removed
  const user = members[0];

  // TODO: Make sure they have preferences already for this account

  await ctx.api.gqlRequest(REMOVE_NOTIFICATION_PREFERENCES, {
    data: {
      id: user.id,
      force: true
    }
  }, { checkPermissions:false });

  return event;

};