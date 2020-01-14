import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'antd';
import ActivityCard from '../../components/ActivityCard';
import RecentMessageCard from '../../components/RecentMessageCard';
import QuotaCard from '../../components/QuotaCard';
import InboxCard from '../../components/InboxCard';
import UserSearchInput from '../../components/UserSearchInput';
import { Animated } from 'react-animated-css';
import CardHeader from '../../components/CardHeader';

type Variable = {
  placeholder: string;
};

type Action = {
  title?: string;
  variables?: Variable[];
};

const HomeScene: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<Action | undefined>();

  return (
    <Row type="flex" justify="start" align="top" gutter={[16, 24]}>
      <ActivityCard onClick={action => setSelectedAction(action)} />

      <Col xs={24} sm={24} md={16} lg={8} xl={10}>
        <Animated
          style={{ width: '100%' }}
          animationIn="bounceInRight"
          animationOut="fadeOut"
          isVisible={!!selectedAction}
        >
          <div className="card-container">
            <CardHeader title={(selectedAction && selectedAction.title) || 'Title'} />
            <Row type="flex" justify="start" align="middle">
              <p>To:</p>
              <UserSearchInput />
            </Row>
            <Row type="flex" justify="start" align="middle">
              {selectedAction &&
                selectedAction.variables &&
                selectedAction.variables.map(variable => {
                  return (
                    <Input style={{ marginTop: '15px', marginBottom: '5px' }} placeholder={variable.placeholder} />
                  );
                })}
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p>
                Praesent dapibus hendrerit justo, sollicitudin porttitor velit. Sed quis dignissim lorem. Proin dictum,
                sapien sit amet sollicitudin faucibus, mi lectus tristique ipsum, at facilisis felis magna sed enim.
                Curabitur non tellus est.
              </p>
            </Row>
            <Row type="flex" justify="end" align="middle">
              <Button type="primary" shape="round">
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
