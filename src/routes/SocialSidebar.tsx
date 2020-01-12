import React from 'react';
import Sider from 'antd/lib/layout/Sider';
import { List, Avatar, Typography } from 'antd';
import faker from 'faker';

const SocialSidebar = () => {
  const recentUsers = [
    { key: 'home', href: '/home', icon: 'home', title: 'James Art' },
    { key: 'Message', href: '/messages', icon: 'message', title: 'Kev Bishop' },
    { key: 'events', href: '/events', icon: 'calendar', title: 'Lisa Turnb' },
    { key: 'groups', href: '/groups', icon: 'contacts', title: 'Fred Bobby' },
    {
      key: 'templates',
      href: '/templates',
      icon: 'read',
      title: 'Deiele Fetres',
    },
    { key: 'logout', href: '/logout', icon: 'logout', title: 'Jason Pollock' },
  ];

  const users = new Array(10).fill(null).map(i => {
    return {
      title: `${faker.name.firstName()} ${faker.name.lastName()}`,
    };
  });

  const groups = new Array(10).fill(null).map(i => {
    return {
      title: faker.company.companyName(),
    };
  });

  const items = [
    { title: 'Recent Users', data: users },
    { title: 'Groups', data: groups },
  ];

  return (
    <Sider>
      {items.map(item => {
        return (
          <div style={{ marginTop: '2rem' }}>
            <p
              style={{
                marginBottom: '1.2rem',
                fontWeight: 800,
                color: '#a0aec0',
                marginLeft: '1rem',
              }}
            >
              {item.title}
            </p>
            {item.data.map(data => {
              return (
                <List.Item.Meta
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px',
                    marginLeft: '1.2rem',
                  }}
                  avatar={
                    <Avatar
                      size="small"
                      style={{
                        backgroundColor: '#4299e1',
                        marginRight: '-7px',
                      }}
                      icon="user"
                    />
                  }
                  title={
                    <Typography.Text
                      style={{
                        color: '#4a5568',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                      }}
                    >
                      {data.title}
                    </Typography.Text>
                  }
                />
              );
            })}
          </div>
        );
      })}
    </Sider>
  );
};

export default SocialSidebar;
