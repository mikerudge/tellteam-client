import React from 'react';
import { Icon } from 'antd';

type Props = {
  title: string;
  icon?: string;
  rightElements?: React.ReactElement;
};

const CardHeader: React.FC<Props> = ({ icon, title, rightElements }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon && <Icon type={icon} style={{ marginRight: '10px' }} />}
        <h2 style={{ fontWeight: 800, margin: 0 }}>{title}</h2>
      </div>
      {rightElements && <div style={{ display: 'flex', alignItems: 'center' }}>{rightElements}</div>}
    </div>
  );
};

export default CardHeader;
