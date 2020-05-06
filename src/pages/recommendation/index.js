import { Card, List, Typography } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import { Like } from '../utilities/Like';
import pic from '../../assets/like.png';
import styles from './style.less';

const { Paragraph } = Typography;

class RecommendationList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'recommendationList/fetch',
    });
  }

  render() {
    const {
      recommendationList : { list },
      loading,
    } = this.props;
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          Jobs are recommended based on your search, view, and favorite history.
        </p>
      </div>
    );
    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt=""
          src={pic}
        />
      </div>
    );
    return (
      <PageHeaderWrapper content={content} extraContent={extraContent}>
        <div className={styles.RecommendationList}>
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
            dataSource={[...list]}
            renderItem={item => {
              return (
                <List.Item key={item.item_id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[
                      <Like itemID={item.item_id} favorite={item.favorite}/>,
                      <a key="option2" target="_blank" rel="noopener noreferrer" href={item.url}>Details</a>,
                      <a key="option3" target="_blank" rel="noopener noreferrer" href={item.company_url}>{item.company}</a>
                    ]}
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
                          <ul>
                            <li>
                              {item.keywords[0]}
                            </li>
                            {item.keywords[1] === undefined ? null : <li>
                              {item.keywords[1]}
                            </li>
                            }

                            {item.keywords[2] === undefined ? null : <li>
                              {item.keywords[2]}
                            </li>
                            }
                          </ul>
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }}
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ recommendationList, loading }) => ({
  recommendationList,
  loading: loading.models.recommendationList,
}))(RecommendationList);
