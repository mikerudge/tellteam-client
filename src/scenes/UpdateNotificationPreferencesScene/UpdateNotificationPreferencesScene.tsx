import React from 'react';
import { NotificationPreference, Account } from '../../shared/API_TYPES';
import { Row, Col, PageHeader, Typography } from 'antd';
import WrappedPreferencesForm from '../../shared/forms/NotificationPreferencesForm';
import { Animated } from 'react-animated-css';

interface Props {
  preferences: NotificationPreference;
  account: Account;
}

const UpdateNotificationPreferencesScene: React.FC<Props> = ({ preferences, account }) => {
  return (
    <Row gutter={[24, 24]}>
      <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={!!preferences}>
        <Col xs={24}>
          <div className="card-container">
            <Row type="flex" align="middle" justify="center">
              <PageHeader title={account.name} />
            </Row>
            <Row type="flex" align="middle" justify="center">
              <Typography.Paragraph>Update your notification preferences below for this account</Typography.Paragraph>
            </Row>

            <Row>
              <WrappedPreferencesForm preferences={preferences} />
            </Row>
          </div>
        </Col>
      </Animated>
    </Row>
  );
};

export default UpdateNotificationPreferencesScene;
