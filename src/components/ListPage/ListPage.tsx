import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { TableProps } from 'antd/lib/table';

type T = {
  args: any;
};

interface Props {
  heading: string;
  tableProps: any;
  Form?: any;
}

const ListPage: React.FC<Props> = ({ heading, tableProps, Form }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>{heading}</h2>
        <Button
          onClick={() => setShowModal(true)}
          icon="plus-circle"
          type="primary"
          size="large"
          disabled
          shape="round"
        >
          New
        </Button>
      </div>
      <Table rowKey="id" style={{ backgroundColor: 'white', borderRadius: '10px' }} {...tableProps} />
      <Modal onCancel={() => setShowModal(false)} visible={showModal && Form}>
        <Form />
      </Modal>
    </div>
  );
};

export default React.memo(ListPage);
