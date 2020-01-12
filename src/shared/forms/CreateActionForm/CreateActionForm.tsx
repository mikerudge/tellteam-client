import React from 'react';
import { Form, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

type Props = {};

const CreateActionForm: React.FC<FormComponentProps & Props> = props => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('message', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input.TextArea placeholder="Sed a." />)}
      </Form.Item>
    </Form>
  );
};

const WrappedForm = Form.create({ name: 'create_action_form' })(CreateActionForm);

export default WrappedForm;
