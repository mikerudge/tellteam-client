import React, { useState } from 'react';
import { Icon, Button, message, Popconfirm, Input, Modal } from 'antd';

type Variable = {
  type: 'text' | 'number';
  placeholder?: string;
};

type Props = {
  title: string;
  description?: string;
  disabled?: boolean;
  variables?: Variable[];
  clearInput: () => void;
  message: string;
};

const CardItem: React.FC<Props> = ({ title, description, disabled, clearInput, variables, message: textMessage }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setLoading(true);
    clearInput();
    setIsSelected(false);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      setIsSelected(false);
      message.success('Message sent');
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 3000);
  };

  return (
    <div
      onClick={() => setIsSelected(true)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f0f2f5',
        padding: '1.2rem',
        borderRadius: '10px',
        marginBottom: '0.9rem',
        cursor: 'pointer',
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {/* <Icon type="user" /> */}
          <h3 style={{ margin: 0, fontWeight: 600, textTransform: 'uppercase' }}>{title}</h3>
          <p style={{ margin: 0, fontWeight: 600, color: '#a0aec0' }}>{description}</p>
        </div>

        {(isSelected || isSuccess || loading) && (
          <Icon theme="outlined" style={{ marginLeft: '5px' }} type={loading ? 'loading' : 'check'} />
        )}
      </div>
      <div>
        {isSelected &&
          variables &&
          variables.map(variable => {
            return <Input style={{ marginTop: '15px', marginBottom: '5px' }} placeholder={variable.placeholder} />;
          })}
        {isSelected && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Button onClick={() => setShowModal(true)} type="ghost">
              Preview Message
            </Button>
            <Button
              disabled={disabled || isSuccess || loading}
              onClick={onClick}
              style={{ marginLeft: '5px' }}
              type="primary"
            >
              Send Message
            </Button>
          </div>
        )}
      </div>
      <Modal centered title="Basic Modal" visible={showModal} onCancel={() => setShowModal(false)}>
        <p>{textMessage}</p>
      </Modal>
    </div>
  );
};

export default CardItem;
