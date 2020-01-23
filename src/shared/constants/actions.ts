import { Action } from '../CUSTOM_TYPES.';

const actions: Action[] = [
  {
    id: 'guest_arrived',
    key: 'bhaksd',
    title: 'GUEST ARRIVED',
    description: 'Let member know their guest has arrived',
    message: 'Hi, your guest {{#if guestName}} {{guestName}} {{/if}} has just arrived at {{placeName}}',
    variables: [
      { key: 'guestName', type: 'text', placeholder: 'Guest Name (optional)' },
      { key: 'placeName', default: 'reception', type: 'text', placeholder: 'Reception' },
    ],
  },
  {
    id: 'car_parked',
    key: 'CAR PARKED INCORRECTLY',
    title: 'CAR PARKED INCORRECTLY',
    description: 'Ask member to move their car',
    message: 'We have had reports of your car ({{carReg}}) being parked against our rules. Please can you move it ASAP',
    variables: [{ key: 'carReg', type: 'text', placeholder: 'CA18 YTR' }],
  },
  {
    id: 'new_mail',
    key: 'lsdajknda',
    title: 'NEW MAIL',
    description: 'Member has mail!',
    message: 'Hey!, just letting you know there is some mail at reception for you.',
  },
  {
    id: 'event',
    key: ';lsdmkmdn',
    title: 'Event Cancelled',
    description: `Let members of the event know its cancelled`,
    message: 'Hi, im sorry to tell you the event today has been cancelled',
  },
];

export default actions;
