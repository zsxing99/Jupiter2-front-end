import React from 'react';
import { history } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Button } from 'antd';
import styles from './Welcome.less';

const Redirect = (props) => {
  const onClickRedirect = () => {
    history.replace(props.to);
  }
  return (
    <pre className={styles.pre}>
      <Button onClick={onClickRedirect}>{props.children}</Button>
    </pre>
  );
}

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="Welcome to Jupiter2. Find your next dream job here!"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        Starting by searching your interested jobs.
      </Typography.Text>
      <Redirect to="/search">Head to the searching panel.</Redirect>
      <Typography.Text strong>
        Save your favorite jobs.
      </Typography.Text>
      <Redirect to="/favorite">Head to your saved jobs.</Redirect>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        Try our recommended jobs.
      </Typography.Text>
      <Redirect to="/recommendation">Head to our recommendation based on your history.</Redirect>
    </Card>
  </PageHeaderWrapper>
);
