import React from 'react';
import MessagesScene from './MessagesScene';
import { useQuery } from 'react-apollo';
import { LIST_MESSAGES_QUERY } from '../../shared/graphql';
import ListPage from '../../components/ListPage';
import { TableProps } from 'antd/lib/table';
import moment from 'moment';
import { Result, Button } from 'antd';

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
      title: 'Content',
      dataIndex: 'text',
      key: 'name',
    },

    {
      title: 'Sent',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (v: string) => moment(v).format('DD/MM/YYYY'),
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
