import React from 'react';
import ListPage from '../../components/ListPage';
import { useQuery } from 'react-apollo';
import { LIST_MEMBERS } from '../../shared/graphql';
import moment from 'moment';
import { Result, Button } from 'antd';
import { User } from '../../shared/API_TYPES';

const MembersSceneContainer: React.FC = () => {
  const { data, loading, error } = useQuery(LIST_MEMBERS);

  if (error) {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, the server is wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }

  const members = data?.usersList?.items ?? [];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (v: string, r: User) => {
        return (
          <a href={`members/${r.id}`} style={{ fontWeight: 600 }}>
            {r.firstName} {r.lastName}
          </a>
        );
      },
    },

    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (v: string) => moment(v).format('DD/MM/YYYY'),
    },
  ];

  const table = {
    columns: columns,
    dataSource: members,
    loading,
  };

  return <ListPage tableProps={table} heading="Members" />;
};

export default MembersSceneContainer;
