import gql from 'graphql-tag';

export const getGroupAndMembers = gql`
  query LIST_GROUP_MEMBERS($id: ID!) {
    group(id: $id) {
      id
      createdAt
      members {
        items {
          email
          firstName
          lastName
          id
        }
      }
      name
      updatedAt
    }
  }
`;
