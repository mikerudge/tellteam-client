import React, { useState } from 'react';
import { Layout, Menu, Icon, Typography } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  let currentKey = 1;

  // const foundIndexPath = findIndex(Object.keys(navItems), key => {
  //     return router.pathname.indexOf(key) > -1;
  // })
  // if( foundIndexPath > -1 ) currentKey = foundIndexPath + 1;

  const navItems = [
    { key: 'home', href: '/home', icon: 'home', title: 'Home' },
    { key: 'Message', href: '/messages', icon: 'message', title: 'Messages' },
    { key: 'events', href: '/events', icon: 'calendar', title: 'Events' },
    { key: 'groups', href: '/groups', icon: 'contacts', title: 'Groups' },
    {
      key: 'templates',
      href: '/templates',
      icon: 'read',
      title: 'Templales',
    },
    { key: 'logout', href: '/logout', icon: 'logout', title: 'Logout' },
  ];

  return (
    <Sider theme="light" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.2rem',
        }}
      >
        <Typography.Title level={4}>TellTeam</Typography.Title>
      </div>

      <Menu theme="light" mode="inline" selectedKeys={['home']}>
        {!!true
          ? navItems.map(item => {
              return (
                <Menu.Item key={item.key}>
                  <span>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </span>
                </Menu.Item>
              );
            })
          : [
              <Menu.Item key="login">
                <span>
                  <Icon type="login" />
                  <span>Login</span>
                </span>
              </Menu.Item>,
              <Menu.Item key="register">
                <span>
                  <Icon type="plus-square" />
                  <span>Register</span>
                </span>
              </Menu.Item>,
            ]}
      </Menu>
    </Sider>
  );
};

export default Navigation;
