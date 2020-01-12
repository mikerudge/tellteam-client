import React, { useState } from 'react';
import './ActivityCard.less';
import CardItem from './CardItem';
import { Input, Icon, message, Col, Select, Spin, Button } from 'antd';
import axios from 'axios';
import CardHeader from '../CardHeader';
const { Option } = Select;

type Props = {
  title: string;
};

type Variable = {
  type: 'text' | 'number';
  placeholder?: string;
};

type CardItem = {
  key: string;
  title: string;
  description: string;
  variables?: Variable[];
  message: string;
};

type User = {
  value: string;
  text: string;
};

const ActivityCard: React.FC<Props> = ({ title }) => {
  const [member, setMember] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[] | undefined>([]);

  const memberName = (member && member[0].label) || 'a member';

  const items: CardItem[] = [
    {
      key: 'bhaksd',
      title: 'GUEST ARRIVED',
      description: `Let ${memberName} know their guest has arrived`,
      message: 'Hi, your guest has just arrived at reception',
      variables: [{ type: 'text', placeholder: 'Guest Name (optional)' }],
    },
    {
      key: 'CAR PARKED INCORRECTLY',
      title: 'CAR PARKED INCORRECTLY',
      description: `Ask ${memberName} to move their car`,
      message: 'We have had reports of your car being parked against our rules. Please you you move it ASAP',
      variables: [{ type: 'text', placeholder: 'CA18 YTR' }],
    },
    {
      key: 'lsdajknda',
      title: 'NEW MAIL',
      description: `${memberName} has mail!`,
      message: 'Hey!, just letting you know there is some mail at reception for you.',
    },
    {
      key: ';lsdmkmdn',
      title: 'Event Cancelled',
      description: `Let members of the event know its cancelled`,
      message: 'Hi, im sorry to tell you the event today has been cancelled',
    },
  ];

  const fetchUsers = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=5');

      const results = data.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        })
      );

      setUsers(results);
    } catch (e) {
      console.log('e', e);
      message.error('Could not get users');
    }

    setIsLoading(false);
  };

  return (
    <Col xs={24} sm={24} md={16} lg={8} xl={10}>
      <div className="card-container">
        <CardHeader
          title="Quick Actions"
          icon="user"
          rightElements={<Button size="small" shape="circle" type="primary" icon="plus" />}
        />
        {/* <Input
          value={member}
          onChange={e => setMember(e.target.value)}
          style={{ marginBottom: '2rem' }}
          placeholder="Lisa Thomas"
          size="large"
          prefix={<Icon type="user" style={{ color: '#a0aec0' }} />}
        /> */}

        <Select
          mode="multiple"
          labelInValue
          value={member}
          placeholder="Select members"
          notFoundContent={isLoading ? <Spin size="small" /> : null}
          filterOption={false}
          onSearch={fetchUsers}
          onChange={(e: React.SetStateAction<string>) => setMember(e)}
          style={{ width: '100%', marginBottom: '2rem' }}
        >
          {users && users.map(d => <Option key={d.value}>{d.text}</Option>)}
        </Select>

        {items.map(item => {
          return <CardItem {...item} disabled={!member} clearInput={() => setMember({ value: null, label: null })} />;
        })}
      </div>
    </Col>
  );
};

export default ActivityCard;
