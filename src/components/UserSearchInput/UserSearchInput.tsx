import React, { useState } from 'react';
import { Select, message, Spin } from 'antd';
import Axios from 'axios';
import { useQuery } from 'react-apollo';
import { GET_ACCOUNT_MEMBERS } from '../../shared/graphql';
import { Get_Account_MembersQuery, Get_Account_MembersQueryVariables } from '../../shared/API_TYPES';
const { Option } = Select;

type User = {
  value: string;
  text: string;
};

const UserSearchInput: React.FC = () => {
  const [member, setMember] = useState();

  const { data, loading, error } = useQuery<Get_Account_MembersQuery, Get_Account_MembersQueryVariables>(
    GET_ACCOUNT_MEMBERS,
    { variables: { id: 'ck56yfrae01cg07jma361drto' } }
  );

  if (error) {
    console.log('error', error);
  }
  console.log('data sdsa', data);
  const members = data?.account?.members?.items ?? [];

  return (
    <div style={{ width: '100%' }}>
      <Select
        labelInValue
        value={member}
        placeholder="Select members"
        notFoundContent={loading ? <Spin size="small" /> : null}
        filterOption={false}
        onChange={(e: React.SetStateAction<string>) => setMember(e)}
        style={{ width: '100%' }}
      >
        {members &&
          members.map(d => (
            <Option key={d.id ?? 'djs'}>
              {d.firstName} {d.lastName}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default UserSearchInput;
