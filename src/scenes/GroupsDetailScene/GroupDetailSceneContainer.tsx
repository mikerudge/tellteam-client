import React from 'react';
import { useQuery } from 'react-apollo';
import { getGroupAndMembers } from './query';
import { useParams } from 'react-router-dom';
import { Result, Row, Spin } from 'antd';
import { Group, User } from '../../shared/API_TYPES';
import GroupsDetailScene from './GroupDetailScene';
const GroupsDetailSceneContainer: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(getGroupAndMembers, { variables: { id } });

  if (error) {
    return <Result status="500" title="500" subTitle="Sorry, the server is wrong." />;
  }

  if (loading) {
    return (
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Spin />
      </Row>
    );
  }

  const group: Group = data?.group;
  const members: User[] = group?.members?.items ?? [];

  return <GroupsDetailScene group={group} members={members} />;
};

export default GroupsDetailSceneContainer;
