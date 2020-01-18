import React, { useState } from 'react';
import { Action } from '../../shared/CUSTOM_TYPES.';
import CardHeader from '../CardHeader';
import { Row, Input, Button } from 'antd';
import UserSearchInput from '../UserSearchInput';
const Handlebars = require('handlebars');

type Props = {
  action: Action;
  setSelectedCard: (args: boolean) => void;
};

const MessageCard: React.FC<Props> = ({ action, setSelectedCard }) => {
  const [loading, setLoading] = useState(false);

  // const template = Handlebars.compile(action?.message);

  // let message = action.message;

  // message = template({ guestName: null });

  const sendMessage = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSelectedCard(false);
    }, 3000);
  };

  return (
    <div className="card-container">
      <CardHeader title={action?.title || 'Title'} />
      <Row type="flex" justify="start" align="middle">
        <p style={{ width: '10px' }}>To:</p>
        <UserSearchInput />
      </Row>
      <Row type="flex" justify="start" align="middle">
        {action?.variables?.map(variable => {
          return (
            <Input
              key={variable.key}
              style={{ marginTop: '15px', marginBottom: '5px' }}
              placeholder={variable.placeholder}
            />
          );
        })}
      </Row>
      <Row type="flex" justify="start" align="middle">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'middle',
            padding: '1.2rem',
            background: '#edf2f7',
            borderRadius: '5px',
            width: '100%',
            color: '#2d3748',
            fontWeight: 700,
            marginTop: '2rem',
          }}
        >
          <p style={{ margin: '0' }}>{action?.message}</p>
        </div>
      </Row>
      <Row type="flex" justify="end" align="middle" style={{ marginTop: '2rem' }}>
        <Button loading={loading} onClick={sendMessage} icon="play-circle" size="large" type="primary" shape="round">
          Send
        </Button>
      </Row>
    </div>
  );
};

export default React.memo(MessageCard);
