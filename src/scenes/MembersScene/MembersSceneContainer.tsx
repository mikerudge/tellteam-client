import React from 'react';
import ListPage from '../../components/ListPage';
import { useQuery, useMutation } from 'react-apollo';
import { LIST_MEMBERS, DELETE_MEMBER_MUTATION } from '../../shared/graphql';
import moment from 'moment';
import { Result, Button } from 'antd';
import { User } from '../../shared/API_TYPES';
import { Link } from 'react-router-dom';
import MemberForm from '../../shared/forms/MemberForm';

const MembersSceneContainer: React.FC = () => {
  const { data, loading, error } = useQuery(LIST_MEMBERS);

  const [deleteUser, { loading: deleteLoading }] = useMutation(DELETE_MEMBER_MUTATION);

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
          <Link to={`/members/${r.id}`}>
            {r.firstName} {r.lastName}
          </Link>
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (v: string) => moment(v).format('DD/MM/YYYY'),
    },
    {
      title: '',
      dataIndex: '',
      key: 'view',
      width: 160,
      render: (v: string, r: User) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={() => deleteUser({ variables: { data: { id: r.id } } })}
              loading={deleteLoading}
              icon="delete"
              ghost
              shape="circle"
              type="danger"
            />
          </div>
        );
      },
    },
  ];

  const table = {
    showHeader: false,
    pagination: false,
    columns: columns,
    dataSource: members,
    loading,
  };

  return <ListPage tableProps={table} heading="Members" Form={MemberForm} />;
};

export default MembersSceneContainer;
