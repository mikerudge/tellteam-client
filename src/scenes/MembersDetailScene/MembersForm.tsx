import React from 'react';
import { User } from '../../shared/API_TYPES';
import { Form, Input, Row, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

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

const handleSubmit = () => {};

const MembersForm: React.FC<Props> = ({ user, form }) => {
  const { getFieldDecorator } = form;

  const { Option } = Select;

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
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
              type: 'phone',
              message: 'The input is not valid Phone number',
            },
            {
              required: true,
              message: 'Please make sure the member has a number',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Status" hasFeedback validateStatus={user?.status === 'active' ? 'success' : 'warning'}>
        {getFieldDecorator('status', {
          initialValue: user?.status,
        })(
          <Select>
            <Option value="active">Active</Option>
            <Option value="waiting">Waiting</Option>
            <Option value="unsubscribed">Unsubscribed</Option>
          </Select>
        )}
      </Form.Item>
    </Form>
  );
};
const WrappedMembersForm = Form.create<Props>({ name: 'membersForm' })(MembersForm);

export default WrappedMembersForm;
