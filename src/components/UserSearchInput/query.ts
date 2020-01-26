import gql from 'graphql-tag';

export const SEARCH_USER = gql`
  query search($query: String!) {
    usersList(filter: { _fullText: $query }) {
      items {
        id
        email
        firstName
        lastName
        company
        carRegistrationNumbers
      }
    }
  }
`;
