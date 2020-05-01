import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link, connect } from 'umi';
import styles from './style.less';
import LoginFrom from './components/Login';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = props => {
  const { userAndlogin = {}, submitting } = props;
  const { status, type: loginType } = userAndlogin;
  const [type, setType] = useState('account');

  const handleSubmit = values => {
    const { dispatch } = props;
    dispatch({
      type: 'userAndlogin/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="Email Login">
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="Login failed (username/password incorrect)" />
          )}

          <UserName
            name="user_id"
            placeholder="username"
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          />
        </Tab>
        <Submit loading={submitting}>Login</Submit>
        <div className={styles.other}>
          <Link className={styles.register} to="/user/register">
            Register
          </Link>
        </div>
      </LoginFrom>
    </div>
  );
};

export default connect(({ userAndlogin, loading }) => ({
  userAndlogin,
  submitting: loading.effects['userAndlogin/login'],
}))(Login);
