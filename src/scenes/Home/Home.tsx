import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ActivityCard from '../../components/ActivityCard';
import { Animated } from 'react-animated-css';
import MessageCard from '../../components/MessageCard';

const HomeScene: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState();
  const [shouldAnimate, setShouldAnimate] = useState(true);

  return (
    <Row style={{ width: '100%' }} type="flex" justify="start" align="top" gutter={[16, 24]}>
      <Col xs={24} sm={24} md={16} lg={12} xl={12}>
        <ActivityCard
          selectedActionId={selectedAction?.key}
          onClick={action => {
            setSelectedAction(action);
            setShouldAnimate(true);
          }}
        />
      </Col>
      {selectedAction && (
        <Col xs={24} sm={24} md={16} lg={12} xl={12}>
          <Animated
            style={{ width: '100%' }}
            animationIn="bounceInRight"
            animationOut="bounceOutRight"
            isVisible={shouldAnimate}
          >
            <MessageCard
              setSelectedCard={setSelectedAction}
              action={selectedAction}
              animateOut={() => setShouldAnimate(false)}
            />
          </Animated>
        </Col>
      )}
    </Row>
  );
};

export default HomeScene;
