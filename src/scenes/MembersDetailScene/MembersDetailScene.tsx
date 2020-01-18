import React from 'react';
import { User, Notification, Group } from '../../shared/API_TYPES';
import { Row, Col, PageHeader, Avatar, Table } from 'antd';
import WrappedMembersForm from '../../shared/forms/MemberForm';
import { Animated } from 'react-animated-css';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';

interface Props {
  user: User;
  messages: Notification[];
  groups: Group[];
}

const MembersDetailScene: React.FC<Props> = ({ user, messages, groups }) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Row gutter={[24, 24]}>
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
      {messages.length > 0 && (
        <Animated
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          isVisible={messages.length > 0 ? true : false}
        >
          <Col xs={24} sm={24} md={16} lg={12} xl={12}>
            <div className="card-container">
              <PageHeader title="Messages" />
              <Table showHeader={false} pagination={false} dataSource={messages}>
                <Column title="Text" dataIndex="text" key="text" />
              </Table>
            </div>
          </Col>
        </Animated>
      )}
      {groups.length > 0 && (
        <Animated
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          isVisible={groups.length > 0 ? true : false}
        >
          <Col xs={24} sm={24} md={16} lg={12} xl={12}>
            <div className="card-container">
              <PageHeader title="Groups" />
              <Table showHeader={false} pagination={false} dataSource={groups}>
                <Column
                  title="Name"
                  dataIndex="name"
                  key="name"
                  render={(text, record: Group) => <Link to={`/groups/${record.id}`}>{text}</Link>}
                />
              </Table>
            </div>
          </Col>
        </Animated>
      )}
    </Row>
  );
};

export default MembersDetailScene;
