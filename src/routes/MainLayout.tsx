import React, { useEffect } from 'react';
import { Layout, Breadcrumb, Typography, PageHeader, Tag, Button } from 'antd';
import SocialSidebar from './SocialSidebar';
import Navigation from './Navigation';
import { useQuery } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../shared/graphql';

const { Header, Content, Footer } = Layout;

// import Navigation from '../components/Navigation';

const MainLayout: React.FC = ({ children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);
  console.log('data', data);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <PageHeader
          ghost={false}
          title={!loading && !error ? `Hi ${data.user.firstName} ` : 'Hi!'}
          tags={<Tag color="green">0 Tasks</Tag>}
          extra={[
            <Button key="3">Create new group</Button>,
            <Button key="2">Add new Member</Button>,
            <Button key="1" type="primary">
              Send Message
            </Button>,
          ]}
        />
        <Content style={{ margin: '26px 26px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>TellTeam ©2020</Footer>
      </Layout>
      {/* <SocialSidebar /> */}
    </Layout>
  );
};

MainLayout.defaultProps = {
  title: 'TellTeam',
  breadcrumbs: [],
};

export default MainLayout;
