import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { TableProps } from 'antd/lib/table';

type T = {
  args: any;
};

interface Props {
  heading: string;
  tableProps: TableProps<T>;
  Form?: any;
}

const ListPage: React.FC<Props> = ({ heading, tableProps, Form }) => {
  const [showModal, setShowModal] = useState(false);

  const viewButton = {
    title: '',
    dataIndex: '',
    key: 'view',
    render: () => {
      return <Button onClick={() => setShowModal(true)} icon="edit" shape="circle" type="primary" ghost />;
    },
  };

  const deleteButton = {
    title: '',
    dataIndex: '',
    key: 'remove',
    render: () => {
      return <Button icon="delete" ghost shape="circle" type="danger" />;
    },
  };

  const columns = tableProps.columns;
  const viewIndex = columns?.findIndex(col => col.key === 'view');
  const removeIndex = columns?.findIndex(col => col.key === 'remove');

  if (removeIndex && removeIndex < 0) columns?.push(deleteButton);
  if (viewIndex && viewIndex < 0) columns?.push(viewButton);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>{heading}</h2>
        <Button onClick={() => setShowModal(true)} icon="plus-circle" type="primary" shape="round">
          New
        </Button>
      </div>
      <Table
        rowKey="id"
        style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px' }}
        {...tableProps}
        columns={columns}
      />
      <Modal onCancel={() => setShowModal(false)} visible={showModal && Form}>
        <Form />
      </Modal>
    </div>
  );
};

export default React.memo(ListPage);
