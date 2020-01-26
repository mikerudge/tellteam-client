import React from 'react';
import { useMutation } from 'react-apollo';
import { Form, Input, Row, Select, message, Button } from 'antd';
import { UPDATE_GROUP_MUTATION } from './updateGroupMutation';

import { FormComponentProps } from 'antd/lib/form';
import { Group } from '../../API_TYPES';

interface Props extends FormComponentProps {
  group?: Group;
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

const GroupForm: React.FC<Props> = ({ group, form }) => {
  const { getFieldDecorator } = form;

  const [updateGroup, { loading }] = useMutation(UPDATE_GROUP_MUTATION);
  // const [createUser, { loading: createUserLoading }] = useMutation<MutationUserCreateArgs>(createMember);

  const { Option } = Select;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFieldsAndScroll(async (err, values) => {
      if (err) return message.warn('Check the form');
      try {
        if (group?.id) {
          await updateGroup({ variables: { data: { id: group?.id, ...values } } });
          message.success('Updated the member');
        } else {
          // await createUser({ variables: { data: values } });
          message.success('Created new member');
        }
      } catch (e) {
        message.error(e.message);
      }
    });
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="Title">
        {getFieldDecorator('name', {
          initialValue: group?.name,
          rules: [
            {
              required: true,
              message: 'Be sure to enter a title of the group',
            },
          ],
        })(<Input />)}
      </Form.Item>

      <Row type="flex" justify="end">
        <Button loading={loading} type="primary" htmlType="submit">
          {group?.id ? 'Update' : 'Create'}
        </Button>
      </Row>
    </Form>
  );
};
const WrappedGroupForm = Form.create<Props>({ name: 'groupForm' })(GroupForm);

export default WrappedGroupForm;
