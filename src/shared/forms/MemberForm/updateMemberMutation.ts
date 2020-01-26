import gql from 'graphql-tag';

export const updateMemberMutation = gql`
  mutation UPDATE_USER($data: UserUpdateInput!) {
    userUpdate(data: $data) {
      id
      firstName
      lastName
      email
      mobileNumber
    }
  }
`;
