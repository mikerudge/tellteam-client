import gql from 'graphql-tag';

export const UPDATE_GROUP_MUTATION = gql`
  mutation UPDATE_GROUP_MUTATION($data: GroupUpdateInput!) {
    groupUpdate(data: $data) {
      id
      name
      createdAt
    }
  }
`;
