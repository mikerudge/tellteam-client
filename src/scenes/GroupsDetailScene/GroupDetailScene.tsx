import React from 'react';
import { Group, User } from '../../shared/API_TYPES';
import { Row, Col, PageHeader, Table } from 'antd';
import { Animated } from 'react-animated-css';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';
import GroupForm from '../../shared/forms/GroupForm';

interface Props {
  group: Group;
  members: User[];
}

const GroupsDetailScene: React.FC<Props> = ({ group, members }) => {
  return (
    <Row gutter={[24, 24]}>
      <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={!!group}>
        <Col xs={24} sm={24} md={16} lg={12} xl={12}>
          <div className="card-container">
            <Row type="flex" align="middle" justify="center">
              {/* <Avatar size="large" shape="circle" src={user?.avatar?.previewUrl ?? ''} /> */}
              <PageHeader title={group.name} />
            </Row>

            <Row>
              <GroupForm group={group} />
            </Row>
          </div>
        </Col>
      </Animated>
      {members.length > 0 && (
        <Animated
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          isVisible={members.length > 0 ? true : false}
        >
          <Col xs={24} sm={24} md={16} lg={12} xl={12}>
            <div className="card-container">
              <PageHeader title="Members" />
              <Table showHeader={false} pagination={false} dataSource={members} rowKey="id">
                <Column
                  title="Name"
                  dataIndex="firstName"
                  key="text"
                  render={(text, user: User) => (
                    <Link to={`/members/${user.id}`}>
                      {user.firstName} {user.lastName}
                    </Link>
                  )}
                />
              </Table>
            </div>
          </Col>
        </Animated>
      )}
    </Row>
  );
};

export default GroupsDetailScene;
