import gql from 'graphql-tag';

export const createMember = gql`
  mutation CREATE_USER($data: UserCreateInput!) {
    userCreate(data: $data) {
      id
      firstName
      lastName
      email
      mobileNumber
    }
  }
`;
