import React, { useState } from 'react';
import './ActivityCard.less';
import CardItem from './CardItem';
import { Input, Icon, message, Col, Select, Spin, Button } from 'antd';
import axios from 'axios';
import CardHeader from '../CardHeader';

type Props = {
  onClick: (args0: object) => void;
  selectedActionId?: string;
};

type Variable = {
  type: 'text' | 'number';
  placeholder?: string;
};

type CardItem = {
  key: string;
  title: string;
  description: string;
  variables?: Variable[];
  message: string;
};

const ActivityCard: React.FC<Props> = ({ onClick, selectedActionId }) => {
  const memberName = 'a member';

  const items: CardItem[] = [
    {
      key: 'bhaksd',
      title: 'GUEST ARRIVED',
      description: `Let ${memberName} know their guest has arrived`,
      message: 'Hi, your guest has just arrived at reception',
      variables: [{ type: 'text', placeholder: 'Guest Name (optional)' }],
    },
    {
      key: 'CAR PARKED INCORRECTLY',
      title: 'CAR PARKED INCORRECTLY',
      description: `Ask ${memberName} to move their car`,
      message: 'We have had reports of your car being parked against our rules. Please you you move it ASAP',
      variables: [{ type: 'text', placeholder: 'CA18 YTR' }],
    },
    {
      key: 'lsdajknda',
      title: 'NEW MAIL',
      description: `${memberName} has mail!`,
      message: 'Hey!, just letting you know there is some mail at reception for you.',
    },
    {
      key: ';lsdmkmdn',
      title: 'Event Cancelled',
      description: `Let members of the event know its cancelled`,
      message: 'Hi, im sorry to tell you the event today has been cancelled',
    },
  ];

  return (
    <Col xs={24} sm={24} md={16} lg={8} xl={10}>
      <div className="card-container">
        <CardHeader title="Quick Actions" icon="user" />

        {items.map(item => {
          return (
            <CardItem
              {...item}
              selected={selectedActionId ? selectedActionId === item.key : false}
              disabled={false}
              onClick={() => onClick(item)}
              clearInput={() => null}
            />
          );
        })}
      </div>
    </Col>
  );
};

export default ActivityCard;
