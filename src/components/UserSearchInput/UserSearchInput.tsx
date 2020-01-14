import React, { useState } from 'react';
import { Select, message, Spin } from 'antd';
import Axios from 'axios';
const { Option } = Select;

type User = {
  value: string;
  text: string;
};

const UserSearchInput: React.FC = () => {
  const [member, setMember] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[] | undefined>([]);
  const fetchUsers = async () => {
    try {
      const { data } = await Axios.get('https://randomuser.me/api/?results=5');

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
    <div style={{ width: '100%' }}>
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
    </div>
  );
};

export default UserSearchInput;
