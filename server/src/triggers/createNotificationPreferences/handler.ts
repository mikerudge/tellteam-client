/**
 * To invoke this function locally, run:
 *  8base invoke-local createNotificationPreferences -p src/triggers/createNotificationPreferences/mocks/request.json
 */

type TriggerResult = {
  data: {
    result: string,
  },
  errors: Array<object>,
};

export default async (event: any, ctx: any) : Promise<TriggerResult> => {

  // TODO: Make a new notification preference file

  return {
    data: {
      ...event.data,
      notificationPreferences: {

      }
    },
    errors: [],
  };
};