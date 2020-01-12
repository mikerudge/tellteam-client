import React from 'react';
import { Modal } from 'antd';
import CreateActionForm from '../../shared/forms/CreateActionForm';

const CreateMessageModal: React.FC = () => {
  return (
    <Modal>
      <CreateActionForm />
    </Modal>
  );
};

export default CreateMessageModal;
