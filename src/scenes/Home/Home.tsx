import React from 'react';
import { Button, Row } from 'antd';
import ActivityCard from '../../components/ActivityCard';
import RecentMessageCard from '../../components/RecentMessageCard';
import QuotaCard from '../../components/QuotaCard';
import InboxCard from '../../components/InboxCard';

const HomeScene: React.FC = () => {
  return (
    <Row type="flex" justify="start" align="top" gutter={[16, 24]}>
      <ActivityCard title="Quick Message" />
      <InboxCard />
      <RecentMessageCard />
      {/* <QuotaCard /> */}
    </Row>
  );
};

export default HomeScene;
