import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ActivityCard from '../../components/ActivityCard';
import { Animated } from 'react-animated-css';
import MessageCard from '../../components/MessageCard';

const HomeScene: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState();

  return (
    <Row type="flex" justify="start" align="top" gutter={[16, 24]}>
      <Col xs={24} sm={24} md={16} lg={12} xl={12}>
        <ActivityCard selectedActionId={selectedAction?.key} onClick={action => setSelectedAction(action)} />
      </Col>
      <Col xs={24} sm={24} md={16} lg={12} xl={12}>
        <Animated
          style={{ width: '100%' }}
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          isVisible={!!selectedAction}
        >
          <MessageCard setSelectedCard={setSelectedAction} action={selectedAction} />
        </Animated>
      </Col>
    </Row>
  );
};

export default HomeScene;
