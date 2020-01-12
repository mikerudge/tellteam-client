import React from 'react';
import GroupsScene from './GroupsScene';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LIST_GROUPS_QUERY } from '../../shared/graphql';
import ListPage from '../../components/ListPage';
import { Button } from 'antd';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      rate
      currency
    }
  }
`;

const GroupsSceneContainer: React.FC = () => {
  const { loading, error, data } = useQuery(LIST_GROUPS_QUERY);

  if (error) return <p>Error</p>;

  const items = data?.groupsList?.items ?? [];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'memberName',
      key: 'name',
      render: (v: string) => {
        return (
          <a href="#" style={{ fontWeight: 600 }}>
            {v}
          </a>
        );
      },
    },

    {
      title: 'Joined',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: '',
      dataIndex: '',
      key: 'view',
    },
  ];

  const table = {
    dataSource: items,
    columns: columns,
    loading,
  };

  return <ListPage tableProps={table} heading="Your groups" />;
};

export default GroupsSceneContainer;
