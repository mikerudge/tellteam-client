import React, { useState } from 'react';
import { Icon, Button, message, Popconfirm, Input, Modal } from 'antd';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

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
  onClick: (args: object) => void;
  message: string;
};

const CREATE_MESSAGE = gql(`mutation Create_Message($text: String!){
  notificationCreate(data: {text: $text, user: {connect: {email: "mikerudge@me.com"}}}){
    id
    text
    createdAt
  }
}`);

const CardItem: React.FC<Props> = props => {
  const [createMessage] = useMutation(CREATE_MESSAGE);

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onSelect = async () => {
    props.onClick(props);
    setLoading(true);
    setIsSelected(false);
    const messageText = 'Pellentesque habitant morbi tristiqueCustom Varibles';
    try {
      await createMessage({ variables: { text: messageText } });
      setIsSuccess(true);
      setIsSelected(false);
      message.success('Message sent');
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch (e) {
      message.error(e.message);
      console.log('e', e);
    }
    setLoading(false);
  };

  const selectCard = () => {
    setIsSelected(true);
    props.onClick(props);
  };

  return (
    <div
      onClick={selectCard}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isSelected ? '#f0fff4' : '#f0f2f5',
        padding: '1.2rem',
        borderRadius: '10px',
        marginBottom: '0.9rem',
        cursor: 'pointer',
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {/* <Icon type="user" /> */}
          <h3 style={{ margin: 0, fontWeight: 600, textTransform: 'uppercase' }}>{props.title}</h3>
          <p style={{ margin: 0, fontWeight: 600, color: '#a0aec0' }}>{props.description}</p>
        </div>

        {(isSelected || isSuccess || loading) && (
          <Icon theme="outlined" style={{ marginLeft: '5px' }} type={loading ? 'loading' : 'check'} />
        )}
      </div>
      <div>
        {isSelected &&
          props.variables &&
          props.variables.map(variable => {
            return <Input style={{ marginTop: '15px', marginBottom: '5px' }} placeholder={variable.placeholder} />;
          })}
        {isSelected && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Button onClick={() => setShowModal(true)} type="ghost">
              Preview Message
            </Button>
            <Button
              disabled={props.disabled || isSuccess || loading}
              onClick={onSelect}
              style={{ marginLeft: '5px' }}
              type="primary"
            >
              Send Message
            </Button>
          </div>
        )}
      </div>
      <Modal centered title="Basic Modal" visible={showModal} onCancel={() => setShowModal(false)}>
        <p>"hello world</p>
      </Modal>
    </div>
  );
};

export default CardItem;
