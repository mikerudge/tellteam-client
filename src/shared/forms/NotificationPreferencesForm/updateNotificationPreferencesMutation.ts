import gql from 'graphql-tag';

export const updateNotificationPreferencesMutation = gql`
  mutation UPDATE_NOTIFICATION_PREFERENCES($data: NotificationPreferenceUpdateInput!) {
    notificationPreferenceUpdate(data: $data) {
        id
        account {
            id
            name
        }
        emailEnabled
        sMSEnabled
    }
  }
`;
