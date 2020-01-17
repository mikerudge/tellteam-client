import React, { useState, useContext } from 'react';
import { Icon, Button, message, Popconfirm, Input, Modal } from 'antd';
import { useMutation, useApolloClient } from 'react-apollo';
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
  selected: Boolean;
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
  const client = useApolloClient();

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSelect = async () => {
    // props.onClick(props);
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
    // setIsSelected(true);
    props.onClick(props);
  };

  return (
    <div
      onClick={selectCard}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: props.selected ? '#4a5568' : '#f0f2f5',
        padding: '1.2rem',
        borderRadius: '10px',
        marginBottom: '0.9rem',
        cursor: 'pointer',
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {/* <Icon type="user" /> */}
          <h3 style={{ margin: 0, fontWeight: 600, textTransform: 'uppercase', color: props.selected ? 'white' : '' }}>
            {props.title}
          </h3>
          <p style={{ margin: 0, fontWeight: 600, color: '#a0aec0' }}>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
