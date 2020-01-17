import React, { useState, useContext } from 'react';
import { Button, Row, Col, Input } from 'antd';
import ActivityCard from '../../components/ActivityCard';

import UserSearchInput from '../../components/UserSearchInput';
import { Animated } from 'react-animated-css';
import CardHeader from '../../components/CardHeader';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

type Variable = {
  placeholder: string;
};

type Action = {
  key?: string;
  title?: string;
  variables?: Variable[];
};

const GET_SELECTED_ACTION = gql`
  {
    selectedAction @client
  }
`;

const HomeScene: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState();
  const { data, client } = useQuery(GET_SELECTED_ACTION);

  console.log('data home', data);

  const message = 'Hey ${memberName} your guest ${guestName} has just arrived at reception';

  return (
    <Row type="flex" justify="start" align="top" gutter={[16, 24]}>
      <ActivityCard selectedActionId={'djsds'} onClick={action => setSelectedAction(action)} />

      <Col xs={24} sm={24} md={16} lg={8} xl={10}>
        <Animated
          style={{ width: '100%' }}
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          isVisible={!!selectedAction}
        >
          <div className="card-container">
            <CardHeader title={(selectedAction && selectedAction?.title) || 'Title'} />
            <Row type="flex" justify="start" align="middle">
              <p>To:</p>
              <UserSearchInput />
            </Row>
            <Row type="flex" justify="start" align="middle">
              {selectedAction &&
                selectedAction.variables &&
                selectedAction.variables.map((variable: { placeholder: string | undefined }) => {
                  return (
                    <Input style={{ marginTop: '15px', marginBottom: '5px' }} placeholder={variable.placeholder} />
                  );
                })}
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{ marginTop: '2rem' }}>{message}</p>
            </Row>
            <Row type="flex" justify="end" align="middle" style={{ marginTop: '2rem' }}>
              <Button disabled icon="play-circle" size="large" type="primary" shape="round">
                Send
              </Button>
            </Row>
          </div>
        </Animated>
      </Col>

      {/* <RecentMessageCard /> */}
    </Row>
  );
};

export default HomeScene;
