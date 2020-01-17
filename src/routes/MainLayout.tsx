import React, { useEffect } from 'react';
import { Layout, Breadcrumb, Typography, PageHeader, Tag, Button } from 'antd';
import SocialSidebar from './SocialSidebar';
import Navigation from './Navigation';
import { useQuery } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../shared/graphql';
import { Get_Accounts_And_UserQuery } from '../shared/API_TYPES';

const { Header, Content, Footer } = Layout;

// import Navigation from '../components/Navigation';

const MainLayout: React.FC = ({ children }) => {
  const { data, loading, error } = useQuery<Get_Accounts_And_UserQuery>(CURRENT_USER_QUERY);

  const user = data?.user;
  const acccounts = data?.accountsList.items ?? [];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <PageHeader
          ghost={false}
          title={!loading && !error ? `Hi ${data?.user?.firstName ?? ''} ` : 'Hi!'}
          tags={acccounts.map(account => (
            <Tag color="green">{account.name}</Tag>
          ))}
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
