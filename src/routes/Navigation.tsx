import React, { useState } from 'react';
import { Layout, Menu, Icon, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { withAuth } from '@8base/react-sdk';
import { compose } from 'recompose';
import { withApollo } from 'react-apollo';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Navigation = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['home']);
  // const { auth, client } = props;

  let currentKey = 'home';

  // const foundIndexPath = findIndex(Object.keys(navItems), key => {
  //     return router.pathname.indexOf(key) > -1;
  // })
  // if( foundIndexPath > -1 ) currentKey = foundIndexPath + 1;

  // const onLogout = async () => {
  //   await client.clearStore();
  //   auth.authClient.logout();
  // };

  const navItems = [
    { key: 'home', href: '/home', icon: 'home', title: 'Home' },
    { key: 'members', href: '/members', icon: 'user', title: 'Members' },
    { key: 'message', href: '/messages', icon: 'message', title: 'Messages' },
    { key: 'groups', href: '/groups', icon: 'contacts', title: 'Groups' },
  ];

  return (
    <Sider theme="light" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#5299EA',
          height: '64px',
        }}
      >
        <img src="./logo.svg" style={{ height: '20px' }} />
      </div>

      <Menu defaultSelectedKeys={['home']} theme="light" mode="inline" selectedKeys={selectedKeys}>
        {navItems.map(item => {
          return (
            <Menu.Item key={item.key} onClick={() => setSelectedKeys([item.key])}>
              <Link to={item.href}>
                <span>
                  <Icon type={item.icon} />
                  <span style={{ textTransform: 'capitalize' }}>{item.title}</span>
                </span>
              </Link>
            </Menu.Item>
          );
        })}
        <Menu.Item>
          <Button
            block
            ghost
            type="primary"
            icon="logout"
            onClick={async () => {
              await props.client.clearStore();
              props.auth.authClient.logout();
            }}
          >
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const WrappedNavigation = compose(withApollo, withAuth)(Navigation);

export default WrappedNavigation;
