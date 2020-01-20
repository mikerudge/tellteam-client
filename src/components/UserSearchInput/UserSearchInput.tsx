import React, { useState } from 'react';
import { Select, Spin, message } from 'antd';
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
    message.error('Something went wrong!');
    return null;
  }

  const members = data?.account?.members?.items ?? [];

  return (
    <Select
      size="large"
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
  );
};

export default React.memo(UserSearchInput);
