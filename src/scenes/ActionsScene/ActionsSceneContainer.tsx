import React from 'react';
import ListPage from '../../components/ListPage';
import CreateActionForm from '../../shared/forms/CreateActionForm';
import { Modal } from 'antd';
import ActionsScene from './ActionsScene';

const ActionsSceneContainer: React.FC = () => {
  const data: any[] = [
    {
      key: 'bhaksd',
      title: 'GUEST ARRIVED',
      description: `Let the member know their guest has arrived`,
      message: 'Hi, your guest has just arrived at reception',
      variables: [{ type: 'text', placeholder: 'Guest Name (optional)' }],
    },
    {
      key: 'CAR PARKED INCORRECTLY',
      title: 'CAR PARKED INCORRECTLY',
      description: `Ask member to move their car`,
      message: 'We have had reports of your car being parked against our rules. Please you you move it ASAP',
      variables: [{ type: 'text', placeholder: 'CA18 YTR' }],
    },
    {
      key: 'lsdajknda',
      title: 'NEW MAIL',
      description: `Member has mail!`,
      message: 'Hey!, just letting you know there is some mail at reception for you.',
    },
    {
      key: ';lsdmkmdn',
      title: 'Event Cancelled',
      description: `Let members of the event know its cancelled`,
      message: 'Hi, im sorry to tell you the event today has been cancelled',
    },
  ];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'Description',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'Message',
    },
  ];

  const systemVariables = ['Today', 'Yesterday', 'Member Name', 'My Name'];

  return <ActionsScene data={data} systemVariables={systemVariables} />;
};

export default ActionsSceneContainer;
