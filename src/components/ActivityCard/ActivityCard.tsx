import React, { useState } from 'react';
import './ActivityCard.less';
import CardItem from './CardItem';
import { Input, Icon, message, Col, Select, Spin, Button } from 'antd';
import axios from 'axios';
import CardHeader from '../CardHeader';
import actions from '../../shared/constants/actions';

type Props = {
  onClick: (args0: object) => void;
  selectedActionId?: string;
};

const ActivityCard: React.FC<Props> = ({ onClick, selectedActionId }) => {
  const memberName = 'a member';

  return (
    <div className="card-container">
      <CardHeader title="Quick Actions" icon="user" />

      {actions.map(action => {
        return (
          <CardItem
            key={action.key}
            action={action}
            selected={selectedActionId ? selectedActionId === action.key : false}
            onClick={() => onClick(action)}
            clearInput={() => null}
          />
        );
      })}
    </div>
  );
};

export default ActivityCard;
