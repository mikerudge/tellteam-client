import React from 'react';
import UpdateNotificationPreferencesScene from './UpdateNotificationPreferencesScene';
import { Account, Group, NotificationPreference } from '../../shared/API_TYPES';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { GET_NOTIFICATION_PREFERENCES } from '../../shared/graphql';
import { Result, Spin, Row } from 'antd';

const UpdateNotificationPreferencesSceneContainer: React.FC<any> = ({ history }) => {
  let { id, accountId } = useParams();

  const { data, loading, error } = useQuery(GET_NOTIFICATION_PREFERENCES, { variables: { id, accountId } });

  const preferences: NotificationPreference = data?.notificationPreferencesList?.items[0] ?? null;
  const account: Account = preferences?.account ?? {};

  if( !loading && !preferences ) {
    history.push('/')
    return null;
  }

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

  if (!preferences) {
    return <Result status="404" title="No User Found" subTitle="Sorry, no user found" />;
  }

  return <UpdateNotificationPreferencesScene preferences={preferences} account={account} />;
};

export default UpdateNotificationPreferencesSceneContainer;
