import gql from 'graphql-tag';
/**
 * Query the current users details.
 */
export const CURRENT_USER_QUERY = gql`
  query GET_ACCOUNTS_AND_USER {
    user {
      id
      email
      lastName
      firstName
    }
    accountsList {
      items {
        id
        name
      }
    }
  }
`;

export const GET_ACCOUNT_MEMBERS = gql`
  query GET_ACCOUNT_MEMBERS($id: ID!) {
    account(id: $id) {
      id
      admins {
        items {
          email
        }
      }
      members {
        items {
          id
          lastName
          firstName
        }
      }
    }
  }
`;

/**
 * Sign up a new user mutation.
 */
export const USER_SIGN_UP_MUTATION = gql`
  mutation UserSignUp($user: UserCreateInput!, $authProfileId: ID) {
    userSignUpWithToken(user: $user, authProfileId: $authProfileId) {
      id
      email
    }
  }
`;

export const LIST_GROUPS_QUERY = gql`
  query {
    groupsList {
      items {
        id
        createdAt
        name
        _description
      }
    }
  }
`;

export const DELETE_MEMBER_MUTATION = gql`
  mutation DELETE_MEMBER($data: UserDeleteInput!) {
    userDelete(data: $data) {
      success
    }
  }
`;

export const LIST_MEMBERS = gql`
  query LIST_MEMBERS {
    usersList(orderBy: firstName_ASC) {
      items {
        id
        company
        lastName
        firstName
        email
        carRegistrationNumbers
        mobileNumber
        createdAt
        status
        updatedAt
      }
    }
  }
`;

export const LIST_MESSAGES_QUERY = gql`
  query GET_MESSAGES {
    notificationsList(orderBy: createdAt_DESC) {
      items {
        id
        delivered
        text
        createdAt
        createdBy {
          id
          firstName
          lastName
        }
        users {
          items {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GET_USER_BY_ID($id: ID!) {
    user(id: $id) {
      id
      email
      createdAt
      company
      status
      firstName
      lastName
      groups {
        items {
          id
          name
        }
      }
      notifications {
        items {
          id
          text
          createdAt
        }
      }
      mobileNumber
      avatar {
        previewUrl
      }
      carRegistrationNumbers
    }
  }
`;

export const GET_NOTIFICATION_PREFERENCES = gql`
  query GET_NOTIFICATION_PREFERENCES($id: ID! $accountId: ID!) {
      notificationPreferencesList(first: 1, filter: {
          id: { equals: $id }
          account: {
              id: { equals: $accountId }
          }
      }) {
          count
          items {
              id
              account {
                  id
                  name
              }
              emailEnabled
              sMSEnabled
          }
      }
  }
`;
