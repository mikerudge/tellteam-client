import React, { useEffect } from 'react';
import { Layout, Breadcrumb, Typography, PageHeader, Tag, Button, Menu, Row, Icon } from 'antd';
import SocialSidebar from './SocialSidebar';
import Navigation from './Navigation';
import { useQuery } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../shared/graphql';
import { Get_Accounts_And_UserQuery } from '../shared/API_TYPES';

const { Header, Content, Footer } = Layout;

// import Navigation from '../components/Navigation';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Layout>
        <Header style={{ background: '#5299EA', padding: 0 }}>
          {/* <Menu theme="light" mode="horizontal" style={{ lineHeight: '64px', float: 'right', background: '#034A4A' }}>
            <Menu.Item key="0">
              <Icon type="notification" theme="outlined" />
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="user" theme="outlined" />
            </Menu.Item>
          </Menu> */}
        </Header>
        {/* <PageHeader
          ghost={false}
          title={!loading && !error ? `Hi ${data?.user?.firstName ?? ''} ` : 'Hi!'}
          tags={acccounts.map(account => (
            <Tag color="green">{account.name}</Tag>
          ))}
        /> */}
        <Content style={{ margin: '26px 26px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center', color: '#a0aec0' }}>TellTeam ©2020</Footer>
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
