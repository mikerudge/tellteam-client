import React from 'react';
import { useMutation } from 'react-apollo';
import { Form, Input, Row, Select, message, Button, Switch } from 'antd';

import { updateNotificationPreferencesMutation } from './updateNotificationPreferencesMutation';

import { FormComponentProps } from 'antd/lib/form';
import {
  User,
  MutationUserUpdateArgs,
  MutationUserCreateArgs,
  NotificationPreference,
  MutationNotificationPreferenceUpdateArgs,
} from '../../API_TYPES';

interface Props extends FormComponentProps {
  preferences: NotificationPreference;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 12 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 12 },
  },
};

const PreferencesForm: React.FC<Props> = ({ preferences, form }) => {
  const { getFieldDecorator } = form;

  const [updatePreferences, { loading }] = useMutation<MutationNotificationPreferenceUpdateArgs>(updateNotificationPreferencesMutation);

  const { Option } = Select;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFieldsAndScroll(async (err, values) => {
      if (err) return message.warn('Check the form');
      try {
        await updatePreferences({ variables: { data: { id: preferences?.id, ...values } } });
        message.success('Updated your preferences');
      } catch (e) {
        message.error(e.message);
      }
    });
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="Receive notifications by email">
        {getFieldDecorator('emailEnabled', {
          initialValue: preferences?.emailEnabled,
          valuePropName: 'checked',
        })(<Switch />)}
      </Form.Item>
      <Form.Item label="Receive notifications by SMS">
        {getFieldDecorator('sMSEnabled', {
          initialValue: preferences?.sMSEnabled,
          valuePropName: 'checked',
        })(<Switch />)}
      </Form.Item>
      <Row type="flex" justify="end">
        <Button size="large" loading={loading} type="primary" htmlType="submit">
          Save
        </Button>
      </Row>
    </Form>
  );
};
const WrappedPreferencesForm = Form.create<Props>({ name: 'preferencesForm' })(PreferencesForm);

export default WrappedPreferencesForm;
