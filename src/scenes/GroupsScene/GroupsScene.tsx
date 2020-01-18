import React from 'react';
import { Table } from 'antd';

type Group = {
  id: string;
  name: string;
  createdAt: string;
};

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
];

type Props = {
  data: Group[];
};

const GroupsScene: React.FC<Props> = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default GroupsScene;
