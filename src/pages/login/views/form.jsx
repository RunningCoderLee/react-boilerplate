import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';

const FormItem = Form.Item;

const LogInBox = (props) => {
  const {
    onLogin,
    loading,
    form: {
      getFieldDecorator,
      validateFields,
    },
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        onLogin(values);
      }
    });
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <FormItem >
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入密码！' }],
        })(<Input placeholder="密码：123456" />)}
      </FormItem>
      <FormItem >
        <Button
          className="btn-login"
          type="primary"
          htmlType="submit"
          loading={loading}
        >登录
        </Button>
      </FormItem>
    </Form>
  );
};

LogInBox.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator : PropTypes.func.isRequired,
    validateFields    : PropTypes.func.isRequired,
  }).isRequired,
  loading : PropTypes.bool.isRequired,
  onLogin : PropTypes.func.isRequired,
};

export default Form.create()(LogInBox);
