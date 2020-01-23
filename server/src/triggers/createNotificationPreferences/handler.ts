/**
 * To invoke this function locally, run:
 *  8base invoke-local createNotificationPreferences -p src/triggers/createNotificationPreferences/mocks/request.json
 */

type TriggerResult = {
  data: Object,
  errors: Array<object>,
};

export default async (event: any, ctx: any) : Promise<TriggerResult> => {

  const { data } = event;
  if( !data ) return event;

  const { id } = data;

  // TODO: Check user's roles
  // TODO: Make a new notification preference record

  return {
    data: event.data,
    errors: []
  };
};