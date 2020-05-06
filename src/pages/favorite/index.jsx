import { Button, Card, List, Typography } from 'antd';
import React, { Component } from 'react';
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import styles from './style.less';

const { Paragraph } = Typography;

class FavoriteList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listAndcardList/fetch',
    });
  }

  render() {
    const {
      listAndcardList : { list },
      loading,
    } = this.props;
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          Your favorite jobs are shown here.
        </p>
      </div>
    );
    const nullData = {};
    return (
      <PageHeaderWrapper content={content}>
        <div className={styles.FavoriteList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{
              gutter: 24,
              lg: 3,
              md: 2,
              sm: 1,
              xs: 1,
            }}
            dataSource={[...list, nullData]}
            renderItem={item => {
              if (item && item.item_id) {
                return (
                  <List.Item key={item.item_id}>
                    <Card
                      hoverable
                      className={styles.card}
                      actions={[
                        (item.favorite ?
                          <HeartTwoTone twoToneColor="#eb2f96"/>
                          :
                          <HeartOutlined />
                        ),
                        <a key="option2" target="_blank" rel="noopener noreferrer" href={item.url}>Details</a>]}
                    >
                      <Card.Meta
                        avatar={<img alt="" className={styles.cardAvatar} src={item.image_url} />}
                        title={<a>{item.name}</a>}
                        description={
                          <Paragraph
                            className={styles.item}
                            ellipsis={{
                              rows: 3,
                            }}
                          >
                            {item.keywords}
                          </Paragraph>
                        }
                      />
                    </Card>
                  </List.Item>
                );
              }

              return (
                <Typography.Text>
                  Go to search
                </Typography.Text>
              );
            }}
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ listAndcardList, loading }) => ({
  listAndcardList,
  loading: loading.models.listAndcardList,
}))(FavoriteList);
