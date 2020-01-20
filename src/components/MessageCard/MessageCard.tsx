import React, { useState, useEffect } from 'react';
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
  const [vars, setVars] = useState<any>({ key: 'value' });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let defaultState: any;
    const variables = action.variables ?? [];
    console.log('variables', action.variables);

    variables.forEach(li => {
      console.log('li', li);
      if (defaultState) {
        const newState = { ...defaultState, [li.key]: li.default ?? '' };
        defaultState = newState;
      } else {
        defaultState = { [li.key]: li.default ?? '' };
      }
    });

    setVars(defaultState);
  }, []);

  const template = Handlebars.compile(action?.message ?? '');

  const message = template(vars);

  const sendMessage = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSelectedCard(false);
    }, 3000);
  };

  const updateVar = (key: string, value: string) => {
    const newVars = { ...vars, [key]: value };

    setVars(newVars);
  };

  return (
    <div className="card-container">
      <CardHeader title={action?.title || 'Title'} />
      <Row type="flex" justify="start" align="middle">
        <h4 style={{ width: '10px' }}>To:</h4>
        <UserSearchInput />
      </Row>
      {action?.variables && (
        <Row type="flex" justify="start" align="middle">
          <div style={{ marginTop: '2rem' }}>
            <h4>Variable(s)</h4>
            {action?.variables?.map(variable => {
              const { key } = variable;

              let value = vars[key] ?? '';

              return (
                <Input
                  value={value}
                  key={key}
                  onChange={e => updateVar(key, e.target.value)}
                  style={{ marginBottom: '5px' }}
                  placeholder={variable.placeholder}
                />
              );
            })}
          </div>
        </Row>
      )}
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
          <p style={{ margin: '0' }}>{message}</p>
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
