import React from 'react';
import ListPage from '../../components/ListPage';
import CreateActionForm from '../../shared/forms/CreateActionForm';
import { Modal, Row, Col, Input, Button, Tag, Tabs } from 'antd';
import CardHeader from '../../components/CardHeader';
import TextArea from 'antd/lib/input/TextArea';
const { TabPane } = Tabs;

type Props = {
  data?: any[];
  systemVariables: string[];
};

const ActionsScene: React.FC<Props> = ({ data, systemVariables }) => {
  const actions = data ?? [];

  return (
    <>
      <Row
        style={{ marginBottom: '2rem', marginTop: '2rem' }}
        type="flex"
        justify="space-between"
        align="top"
        gutter={[16, 24]}
      >
        <h2>Actions</h2>
        <Button shape="round" type="primary" icon="plus">
          New Action
        </Button>
      </Row>
      <Row style={{ marginBottom: '2rem' }}>
        <h2>Variables</h2>
        {systemVariables.map(v => {
          return <Tag color="purple">{v}</Tag>;
        })}
      </Row>
      <Row type="flex" justify="start" align="top" gutter={[16, 24]}>
        {actions.map(action => {
          return (
            <Col key={action.key} xs={24} sm={24} md={16} lg={8} xl={8}>
              <div className="card-container">
                <CardHeader title={action.title} />
                <h3 style={{ color: '#a0aec0', marginTop: 0, marginBottom: '2rem' }}>{action.description}</h3>

                <Row type="flex" justify="space-between" align="middle">
                  <h4>Inputs</h4>
                  {/* <Button type="primary" shape="round" icon="plus" ghost>
                    Add variable
                  </Button> */}
                </Row>

                {action?.variables?.map((variable: { placeholder: string | undefined; key: string | undefined }) => (
                  <Tag color="green">{variable.key}</Tag>
                ))}

                <Tabs defaultActiveKey="1" style={{ marginTop: '2rem' }}>
                  <TabPane tab="SMS" key="1">
                    {action.message}
                  </TabPane>
                  <TabPane tab="Email" key="2">
                    <TextArea
                      style={{ marginTop: '1rem' }}
                      placeholder="Pellentesque vitae luctus lorem. Quisque aliquet pharetra sem non porttitor. In pretium a sapien in feugiat. Quisque vitae aliquet augue, eget posuere quam. Morbi aliquam libero orci, vitae hendrerit sapien efficitur a. Duis quis quam faucibus, ultrices tortor eu, iaculis augue. Aenean rhoncus efficitur dui. Nullam congue sed neque id tincidunt. Praesent efficitur egestas dapibus. Suspendisse non euismod arcu, ut aliquam diam. Vestibulum ullamcorper ex vel diam mollis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque non massa aliquam, rutrum velit at, laoreet velit."
                      value={action.message}
                    ></TextArea>
                  </TabPane>
                  <TabPane tab="App" key="3">
                    {action.message}
                  </TabPane>
                </Tabs>
                <Row type="flex" justify="end" align="top" style={{ marginTop: '2rem' }}>
                  <Button shape="round">Preview</Button>
                  <Button type="primary" shape="round">
                    Test
                  </Button>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ActionsScene;
