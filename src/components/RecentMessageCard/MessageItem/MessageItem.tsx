import React from 'react';

const MessageItem: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f0f2f5',
        padding: '0.9rem',
        borderRadius: '10px',
        marginBottom: '0.9rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ fontWeight: 800 }}>Mike Rudge</p>
        <p style={{ fontWeight: 300 }}>Today</p>
      </div>
      <div>
        <p
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: '#a0aec0',
          }}
        >
          Maecenas ultrices nisl eros, sed laoreet nunc vulputate in. Proin metus augue, pharetra sit amet erat at,
          faucibus ullamcorper dui. Maecenas id dui eget nibh condimentum vestibulum sed non lectus. Aenean porttitor
          enim volutpat lectus pulvinar molestie. Maecenas malesuada aliquam risus quis viverra. Maecenas in laoreet
          tellus. Integer sapien nulla, lacinia eu tellus at, interdum rhoncus odio. Nunc finibus orci vel porttitor
          placerat. Cras metus quam, rutrum nec volutpat et, accumsan lobortis tortor. Donec quis tincidunt nibh. Sed
          eget semper mi, quis dapibus nulla. Quisque tempor porttitor auctor. Fusce condimentum velit euismod tellus
          ultrices suscipit eu quis ligula. Aliquam consequat libero at ligula tincidunt, dapibus vestibulum augue
          luctus. In tincidunt lacus a tristique interdum. Maecenas consectetur venenatis leo, vel porta tellus lobortis
          et.
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
