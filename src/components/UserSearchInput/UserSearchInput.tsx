import React, { useState } from 'react';
import { Select, Spin, message } from 'antd';
import { useParams } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { useQuery, useLazyQuery } from 'react-apollo';
import { GET_ACCOUNT_MEMBERS } from '../../shared/graphql';
import { Get_Account_MembersQuery, Get_Account_MembersQueryVariables, User } from '../../shared/API_TYPES';
import { SEARCH_USER } from './query';
const { Option } = Select;

const UserSearchInput: React.FC = () => {
  const [member, setMember] = useState();
  const { id } = useParams();

  // const { data, loading, error } = useQuery<Get_Account_MembersQuery, Get_Account_MembersQueryVariables>(
  //   GET_ACCOUNT_MEMBERS,
  //   { variables: { id: id || '' } }
  // );

  const [searchUser, { loading, data, error }] = useLazyQuery(SEARCH_USER);

  if (error) {
    message.error('Something went wrong!');
    return null;
  }

  const members: User[] = data?.usersList?.items ?? [];

  const fetchUser = (v: string) => {
    searchUser({ variables: { query: v } });
  };

  const handleChange = (value: string) => {
    console.log('called');
    console.log(value);
    setMember(value);
  };

  const results = members.map(member => {
    return {
      text: `${member?.firstName} ${member.lastName}`,
      value: member.id,
    };
  });

  return (
    <Select
      size="large"
      mode="multiple"
      labelInValue
      value={member}
      placeholder="Select members"
      notFoundContent={loading ? <Spin size="small" /> : null}
      filterOption={false}
      onSearch={debounce(fetchUser, 800)}
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {members &&
        members.map((d: User) => {
          console.log('d', d);
          return (
            <Option key={d.id ?? 'noId'}>
              {d.firstName} {d.lastName}
            </Option>
          );
        })}
    </Select>
  );
};

export default React.memo(UserSearchInput);
