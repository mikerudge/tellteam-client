import React from 'react';
import MessageItem from './MessageItem';
import { Table, Col } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import moment from 'moment';
import CardHeader from '../CardHeader';
import { useQuery } from 'react-apollo';
import { LIST_MESSAGES_QUERY } from '../../shared/graphql';

type Data = {
  memberName: string;
  date: string;
  message: string;
};

const RecentMessageCard: React.FC = () => {
  const { data, loading, error } = useQuery(LIST_MESSAGES_QUERY);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'user',
      key: 'name',
      render: (v: { firstName: React.ReactNode; lastName: React.ReactNode }) => {
        return (
          <a href="#" style={{ fontWeight: 600 }}>
            {v.firstName} {v.lastName}
          </a>
        );
      },
    },
    {
      title: 'message',
      dataIndex: 'text',
      key: 'message',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'date',
      render: (v: string) => moment(v).format('DD/MM/YYYY'),
    },
  ];

  const dataSource = data?.notificationsList?.items ?? [];

  if (error) {
    return (
      <div>
        <h3>Error</h3>
      </div>
    );
  }

  return (
    <Col xs={24} sm={16} md={24} lg={12} xl={12}>
      <div className="card-container">
        <CardHeader title="Recently Sent Messages" icon="message" />
        <Table pagination={false} showHeader={false} columns={columns} dataSource={dataSource} loading={loading} />
      </div>
    </Col>
  );
};

export default RecentMessageCard;
