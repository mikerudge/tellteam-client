import React from 'react';
import { Chart } from 'react-charts';
import { Col } from 'antd';

const QuotaCard: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: 'Series 2',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <Col xs={24} sm={24} md={16} lg={8} xl={8}>
      <div className="card-container">
        <h2 style={{ fontWeight: 800, marginBottom: '20px' }}>Quota</h2>
        <div
          style={{
            width: '400px',
            height: '300px',
          }}
        >
          <Chart data={data} axes={axes} />
        </div>
      </div>
    </Col>
  );
};

export default QuotaCard;
