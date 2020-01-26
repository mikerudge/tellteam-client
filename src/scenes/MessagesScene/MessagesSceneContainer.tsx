import React from 'react';
import MessagesScene from './MessagesScene';
import { useQuery } from 'react-apollo';
import { LIST_MESSAGES_QUERY } from '../../shared/graphql';
import ListPage from '../../components/ListPage';
import { TableProps } from 'antd/lib/table';
import moment from 'moment';
import { Result, Button, Icon, Tag } from 'antd';
import { User, Notification } from '../../shared/API_TYPES';
import { Link } from 'react-router-dom';

type Message = {
  text: string;
};

const MessagesSceneContainer: React.FC = () => {
  const { data, loading, error } = useQuery(LIST_MESSAGES_QUERY);

  if (error) {
    return (
      <Result
        status="500"
        title="Oh No!"
        subTitle="We seem to be having troubling getting your data"
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }

  const items = data?.notificationsList?.items ?? [];

  const columns = [
    {
      title: 'Message',
      dataIndex: 'text',
      key: 'content',
      render: (v: string, r: Notification) => {
        return <Link to={`/messages/${r.id}`}>{v}</Link>;
      },
    },
    {
      title: 'To',
      dataIndex: 'users.items',
      key: 'users',
      render: (v: User[]) => {
        return v.map((user: User) => {
          return (
            <Tag color="green">
              {user.firstName} {user.lastName}
            </Tag>
          );
        });
      },
    },

    {
      title: 'Sent',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (v: string) => moment(v).format('DD/MM/YYYY'),
    },
    {
      title: 'By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      render: (v: User) => {
        return (
          <Tag color="geekblue">
            {v.firstName} {v.lastName}
          </Tag>
        );
      },
    },
    {
      title: 'Delivered',
      dataIndex: 'delivered',
      key: 'delivered',
      render: (v: string) => {
        if (v) {
          return <Icon type="check-circle" theme="twoTone" />;
        }
        return <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />;
      },
    },
  ];

  const table = {
    loading,
    dataSource: items,
    columns,
  };

  return <ListPage tableProps={table} heading="Your Messages" />;
};

export default MessagesSceneContainer;
