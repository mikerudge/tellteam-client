import React from 'react';
import { User, Notification, Group } from '../../shared/API_TYPES';
import { Row, Col, PageHeader, Avatar } from 'antd';
import WrappedMembersForm from './MembersForm';
import { Animated } from 'react-animated-css';

interface Props {
  user: User;
  messages: Notification[];
  groups: Group[];
}

const MembersDetailScene: React.FC<Props> = ({ user, messages, groups }) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Row gutter={24}>
      <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={!!user}>
        <Col xs={24} sm={24} md={16} lg={12} xl={12}>
          <div className="card-container">
            <Row type="flex" align="middle" justify="center">
              <Avatar size="large" shape="circle" src={user?.avatar?.previewUrl ?? ''} />
              <PageHeader title={fullName} />
            </Row>

            <Row>
              <WrappedMembersForm user={user} />
            </Row>
          </div>
        </Col>
      </Animated>
      <Animated animationIn="bounceInRight" animationOut="bounceOutRight" isVisible={!!messages}>
        <Col xs={24} sm={24} md={16} lg={12} xl={12}>
          <div className="card-container">
            <PageHeader title="Messages" />
            {messages.map(message => {
              return <div>{message.text}</div>;
            })}
          </div>
        </Col>
      </Animated>
      <Animated animationIn="bounceInRight" animationOut="bounceOutRight" isVisible={!!groups}>
        <Col xs={24} sm={24} md={16} lg={12} xl={12}>
          <div className="card-container">
            <PageHeader title="Groups" />
            {groups.map(group => {
              return <div>{group.name}</div>;
            })}
          </div>
        </Col>
      </Animated>
    </Row>
  );
};

export default MembersDetailScene;
