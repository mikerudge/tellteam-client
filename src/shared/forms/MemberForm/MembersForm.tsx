import React from 'react';
import { useMutation } from 'react-apollo';
import { Form, Input, Row, Select, message, Button } from 'antd';
import { createMember } from './createMemberMutation';

import { updateMemberMutation } from './updateMemberMutation';

import { FormComponentProps } from 'antd/lib/form';
import { User, MutationUserUpdateArgs, MutationUserCreateArgs } from '../../API_TYPES';

interface Props extends FormComponentProps {
  user?: User;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    xl: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    xl: { span: 18 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 0,
    },
  },
};

const MembersForm: React.FC<Props> = ({ user, form }) => {
  const { getFieldDecorator } = form;

  const [updateUser, { loading }] = useMutation<MutationUserUpdateArgs>(updateMemberMutation);
  const [createUser, { loading: createUserLoading }] = useMutation<MutationUserCreateArgs>(createMember);

  const { Option } = Select;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFieldsAndScroll(async (err, values) => {
      if (err) return message.warn('Check the form');
      try {
        if (user?.id) {
          await updateUser({ variables: { data: { id: user?.id, ...values } } });
          message.success('Updated the member');
        } else {
          await createUser({ variables: { data: values } });
          message.success('Created new member');
        }
      } catch (e) {
        message.error(e.message);
      }
    });
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="First Name">
        {getFieldDecorator('firstName', {
          initialValue: user?.firstName,
          rules: [
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Last Name">
        {getFieldDecorator('lastName', {
          initialValue: user?.lastName,
          rules: [
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          initialValue: user?.email,
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Phone">
        {getFieldDecorator('mobileNumber', {
          initialValue: user?.mobileNumber,
          rules: [
            {
              required: true,
              message: 'Please make sure the member has a number',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Company">
        {getFieldDecorator('company', {
          initialValue: user?.company,
          rules: [
            {
              required: false,
              message: 'Please make sure the member has a number',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Row type="flex" justify="end">
        <Button size="large" loading={loading || createUserLoading} type="primary" htmlType="submit">
          {user?.id ? 'Update' : 'Create'}
        </Button>
      </Row>
    </Form>
  );
};
const WrappedMembersForm = Form.create<Props>({ name: 'membersForm' })(MembersForm);

export default WrappedMembersForm;
