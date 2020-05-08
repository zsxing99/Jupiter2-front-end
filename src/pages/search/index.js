import { Card, List, Typography, Form, Col, Row, Input, Button, Switch, Radio } from 'antd';
import React, { Component }from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import request from '@/utils/request';
import { Like } from '../utilities/Like';
import pic from '../../assets/search.png';
import styles from './style.less';
import StandardFormRow from '@/pages/search/StandardFormRow';

const { Paragraph } = Typography;

class SearchList extends Component {
  componentDidMount() {
    this.searchGeo([]);
  }

  searchGeo = (values) => {
    const { dispatch } = this.props;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch({
          type: 'searchList/fetch',
          payload : {
            method: 'geo',
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            ...values
          }
        })
      })
    } else {
      request.get('http://ipinfo.io/json', {
        credentials: "omit"
      }).then(
        value => {
          dispatch({
            type: 'searchList/fetch',
            payload : {
              method: 'geo',
              lat: value.loc.split[0],
              lon: value.loc.split[1],
              ...values
            }
          })
        }
      )
    }
  }

  render() {
    const {
      searchList : { list },
      loading,
    } = this.props;
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          You can search your interested jobs here by default or customized options.
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

    const onFinish = values => {
      if (!values.method || values.method  === "geo") {
        this.searchGeo([]);
      } else {
        const { dispatch } = this.props;
        console.log(values);
        dispatch({
          type: 'searchList/fetch',
          payload : {

            ...values
          }
        })
      }
    };
    return (
      <PageHeaderWrapper content={content} extraContent={extraContent}>
        <div>
          <Card>
          <StandardFormRow last>
            <Form
              labelAlign="right"
              name="advanced_search"
              onFinish={onFinish}
            >
              <Row gutter={24}>
                <Col span={20} key="11">
                  <Form.Item
                    name='description'
                    label='Description'
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={4} key='12'>
                  <Form.Item
                    name='full_time'
                    label="Full time job"
                  >
                    <Switch defaultChecked/>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={14}>
                  <Form.Item
                    name='keywords'
                    label='Keywords'
                  >
                    <Input placeholder="developer"/>
                  </Form.Item>
                </Col>
                <Col >
                  <Form.Item
                    name='method'
                    label='Location Settings'
                  >
                    <Radio.Group defaultValue="geo">
                      <Radio value="geo">Geometric location</Radio>
                      <Radio value="loc">Customized location</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                  <Button type="primary" htmlType="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </StandardFormRow>
          </Card>
        </div>
        <div className={styles.SearchList}>
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
                    extra={item.address}
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

export default connect(({ searchList, loading }) => ({
  searchList,
  loading: loading.models.searchList,
}))(SearchList);
