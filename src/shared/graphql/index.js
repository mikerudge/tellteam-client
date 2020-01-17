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

export const LIST_MESSAGES_QUERY = gql`
  query GET_NOTIFICATIONS {
    notificationsList {
      items {
        id
        createdAt
        text
        user {
          firstName
          lastName
        }
        createdBy {
          id
          email
        }
      }
    }
  }
`;
