import React from 'react';
import { useQuery } from 'react-apollo';
import GET_MESSAGE from './query';
import { Spin, Result, Row, Tag, Col } from 'antd';
import { Animated } from 'react-animated-css';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { User } from '../../shared/API_TYPES';

const MessageDetailScene: React.FC = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_MESSAGE, { variables: { id } });

  //   const notification = {
  //     id: 'ck5cz8f09007a07mnfgik24et',
  //     delivered: false,
  //     createdAt: '2020-01-13T21:46:06.970Z',
  //     text: 'Pellentesque habitant morbi tristiqueCustom Varibles',
  //     users: {
  //       items: [
  //         {
  //           id: 'ck56lrg0a000408mf7k4rgtae',
  //           email: 'owen@biglemon.co.uk',
  //           firstName: 'Owen',
  //           lastName: 'Richards',
  //           __typename: 'User',
  //         },
  //         {
  //           id: 'ck5a4yq1p001t07la6zf9hzuo',
  //           email: 'mikerudge@me.com',
  //           firstName: 'Mike',
  //           lastName: 'Rudge',
  //           __typename: 'User',
  //         },
  //       ],
  //       __typename: 'UserListResponse',
  //     },
  //     createdBy: {
  //       id: 'ck5a4yq1p001t07la6zf9hzuo',
  //       firstName: 'Mike',
  //       lastName: 'Rudge',
  //       email: 'mikerudge@me.com',
  //       __typename: 'User',
  //     },
  //     __typename: 'Notification',
  //   };

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Result status="500" title="500" subTitle="Sorry, the server is wrong." />;
  }

  const message = data.notification;
  const from = `${message.createdBy.firstName} ${message.createdBy.lastName}`;

  return (
    <Row type="flex" justify="center" align="middle" gutter={[24, 24]} style={{ minHeight: '90vh' }}>
      <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={true}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ color: '#a0aec0' }}>
          <div className="card-container">
            <Row gutter={[24, 24]}>
              <Col>
                To:{' '}
                {message.users.items.map((user: User) => (
                  <Link style={{ marginRight: '5px', fontWeight: 800 }} to={`/members/${user.id}`}>
                    {user.firstName} {user.lastName}
                  </Link>
                ))}
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col>
                From:{' '}
                <Link style={{ marginRight: '5px', fontWeight: 800 }} to={`/members/${message.createdBy.id}`}>
                  {from}
                </Link>
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col>Sent: {moment(message.createdAt).format('DD/MM/YYYY')}</Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col>
                <div style={{ padding: '2rem', background: '#edf2f7', borderRadius: '5px', color: '#4a5568' }}>
                  {message.text}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Animated>
    </Row>
  );
};

export default MessageDetailScene;
