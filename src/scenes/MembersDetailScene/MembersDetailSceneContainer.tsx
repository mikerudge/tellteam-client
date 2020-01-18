import React from 'react';
import MembersDetailScene from './MembersDetailScene';
import { User, Notification, Group } from '../../shared/API_TYPES';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { GET_USER_BY_ID } from '../../shared/graphql';
import { Result, Spin, Row } from 'antd';

const MembersDetailSceneContainer: React.FC = () => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(GET_USER_BY_ID, { variables: { id } });
  const user: User = data?.user;
  //   const user: User = {
  //     id: 'ck56yefwp014l07l28x346fmi',
  //     email: 'Mikerudge15@gmail.com',
  //     createdAt: '2020-01-09T16:36:11.401Z',
  //     company: 'Team Awesome',
  //     status: 'active',
  //     firstName: 'Mike',
  //     lastName: 'Rudge',
  //     mobileNumber: '07800527734',
  //     avatar: {
  //       previewUrl: 'https://api.adorable.io/avatars/400/21317612d4bbdb06433ab6ede5b81537.png',
  //     },
  //     carRegistrationNumbers: ['CA18 ZBR'],
  //   };

  const messages: Notification[] = user?.notifications?.items ?? [];
  const groups: Group[] = user?.groups?.items ?? [];

  if (loading) {
    return (
      <Row style={{ minHeight: '100vh' }} type="flex" justify="center" align="middle">
        <Spin />
      </Row>
    );
  }

  if (error) {
    return <Result status="500" title="500" subTitle="Sorry, the server is wrong." />;
  }

  if (!user) {
    return <Result status="404" title="No User Found" subTitle="Sorry, no user found" />;
  }

  return <MembersDetailScene user={user} messages={messages} groups={groups} />;
};

export default MembersDetailSceneContainer;
