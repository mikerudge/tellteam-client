import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Result, Button } from 'antd';

import ListPage from '../../components/ListPage';

import { LIST_GROUPS_QUERY } from '../../shared/graphql';

import { Group } from '../../shared/API_TYPES';

const GroupsSceneContainer: React.FC = () => {
  const { loading, error, data } = useQuery(LIST_GROUPS_QUERY);

  if (error) {
    return (
      <Result
        status="500"
        title="Uh Oh!"
        subTitle="Sorry, we had trouble getting your groups"
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }

  const items = data?.groupsList?.items ?? [];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (v: string, r: Group) => <Link to={`/groups/${r.id}`}>{v}</Link>,
    },

    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (v: string) => moment(v).format('DD/MM/YYYY'),
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
