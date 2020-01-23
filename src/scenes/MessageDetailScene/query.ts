import gql from 'graphql-tag';

const GET_MESSAGE = gql`
  query GET_MESSAGE($id: ID!) {
    notification(id: $id) {
      id
      delivered
      createdAt
      text
      users(orderBy: [firstName_DESC]) {
        items {
          id
          email
          firstName
          lastName
        }
      }
      createdBy {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export default GET_MESSAGE;
