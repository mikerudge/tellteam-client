import React, { useState } from 'react';
import { Table, Col, Button } from 'antd';
import CardHeader from '../CardHeader';

const dataSource = [
  {
    key: '1',
    memberName: 'John Williams',
    date: 'Today',
    message: 'Pellentesque venenatis eu magna ut imperdiet...',
    isComplete: false,
  },
  {
    key: '2',
    memberName: 'Fred Stone',
    date: 'Yesterday',
    message: 'Orci varius natoque penatibus et magnis dis parturient montes, ',
    isComplete: false,
  },
  {
    key: '3',
    memberName: 'Sed quam.',
    date: 'Yesterday',
    message: 'Orci varius natoque penatibus et magnis dis parturient montes, ',
    isComplete: false,
  },
  {
    key: '4',
    memberName: 'Mauris lobortis.',
    date: 'Yesterday',
    message: 'Orci varius natoque penatibus et magnis dis parturient montes, ',
    isComplete: false,
  },
];

const InboxCard: React.FC = () => {
  const [data, setData] = useState(dataSource);

  const toggleComplete = (row: { key?: string; isComplete?: boolean }) => {
    const newData = [...data];

    const index = data.findIndex(r => r.key === row.key);

    let item = newData[index];

    item.isComplete = !item.isComplete;

    setData(newData);
  };

  const columns = [
    {
      title: '',
      dataIndex: 'actions',
      key: '',
      render: (v: any, row: { isComplete?: boolean; key?: string }) => {
        return (
          <Button
            onClick={() => toggleComplete(row)}
            size="small"
            icon="check"
            type={row.isComplete ? 'primary' : 'dashed'}
            shape="circle"
          ></Button>
        );
      },
    },
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
      title: 'message',
      dataIndex: 'message',
      key: 'message',
      render: (v: string, r: { isComplete: boolean }) => {
        if (r.isComplete) {
          return <del style={{ color: '#a0aec0' }}>{v}</del>;
        }
        return <p style={{ margin: 0 }}>{v}</p>;
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <Col xs={24} sm={16} md={24} lg={12} xl={14}>
      <div className="card-container">
        <CardHeader
          title="Inbox"
          icon="inbox"
          rightElements={<Button size="small" shape="circle" type="primary" icon="plus" />}
        />
        <h3>Reminders</h3>
        <Table pagination={false} showHeader={false} columns={columns} dataSource={data} />
        <h3 style={{ marginTop: '2rem' }}>Member Requests</h3>
        <Table pagination={false} showHeader={false} columns={columns} dataSource={data} />
      </div>
    </Col>
  );
};

export default InboxCard;
