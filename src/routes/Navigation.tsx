import React, { useState } from 'react';
import { Layout, Menu, Icon, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['home']);
  let currentKey = 1;

  // const foundIndexPath = findIndex(Object.keys(navItems), key => {
  //     return router.pathname.indexOf(key) > -1;
  // })
  // if( foundIndexPath > -1 ) currentKey = foundIndexPath + 1;

  const navItems = [
    { key: 'home', href: '/home', icon: 'home', title: 'Home' },
    { key: 'Message', href: '/messages', icon: 'message', title: 'Messages' },
    { key: 'actions', href: '/actions', icon: 'arrow-right', title: 'actions' },
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

      <Menu defaultSelectedKeys={['home']} theme="light" mode="inline" selectedKeys={selectedKeys}>
        {!!true
          ? navItems.map(item => {
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
