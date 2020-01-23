import React from 'react';
import { Action } from '../../../shared/CUSTOM_TYPES.';

type Props = {
  action: Action;
  selected?: boolean;
  clearInput: () => void;
  onClick: (args: Action) => void;
};

const CardItem: React.FC<Props> = ({ onClick, action, selected }) => {
  const selectCard = () => {
    // setIsSelected(true);
    onClick(action);
  };

  return (
    <div
      onClick={selectCard}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: selected ? '#5299EA' : '#edf2f7',
        padding: '1.2rem',
        borderRadius: '10px',
        marginBottom: '0.9rem',
        cursor: 'pointer',
        boxShadow: selected ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' : '',
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {/* <Icon type="user" /> */}
          <h3 style={{ margin: 0, fontWeight: 600, textTransform: 'uppercase', color: selected ? 'white' : '' }}>
            {action.title}
          </h3>
          <p style={{ margin: 0, fontWeight: 600, color: selected ? '#C4DCF8' : '#a0aec0' }}>{action.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
