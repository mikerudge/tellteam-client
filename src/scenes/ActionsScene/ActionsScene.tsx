import React from 'react';
import ListPage from '../../components/ListPage';
import CreateActionForm from '../../shared/forms/CreateActionForm';
import { Modal, Row, Col, Input, Button, Tag } from 'antd';
import CardHeader from '../../components/CardHeader';
import TextArea from 'antd/lib/input/TextArea';

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

                <Row type="flex" justify="space-between" align="middle">
                  <h4>Custom Varibles</h4>
                  {/* <Button type="primary" shape="round" icon="plus" ghost>
                    Add variable
                  </Button> */}
                </Row>

                {action?.variables?.map((variable: { placeholder: string | undefined }) => (
                  <Tag color="green">{variable.placeholder}</Tag>
                ))}
                <h4 style={{ marginTop: '2rem' }}>Message</h4>

                <TextArea
                  style={{ marginTop: '1rem' }}
                  placeholder="Pellentesque vitae luctus lorem. Quisque aliquet pharetra sem non porttitor. In pretium a sapien in feugiat. Quisque vitae aliquet augue, eget posuere quam. Morbi aliquam libero orci, vitae hendrerit sapien efficitur a. Duis quis quam faucibus, ultrices tortor eu, iaculis augue. Aenean rhoncus efficitur dui. Nullam congue sed neque id tincidunt. Praesent efficitur egestas dapibus. Suspendisse non euismod arcu, ut aliquam diam. Vestibulum ullamcorper ex vel diam mollis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque non massa aliquam, rutrum velit at, laoreet velit."
                ></TextArea>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ActionsScene;
