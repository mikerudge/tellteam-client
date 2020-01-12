import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
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

type Notification = {
  text: string;
  createdAt: string;
};

interface Props {
  data: Notification[];
  loading: boolean;
}

const MessagesScene: React.FC<Props> = ({ data, loading }) => {
  return (
    <div>
      <Table columns={columns} dataSource={data} loading={loading} />
    </div>
  );
};

export default MessagesScene;
