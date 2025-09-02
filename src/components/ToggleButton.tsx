import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <p style={{ marginBottom: '10px', fontSize: '16px' }}>Estado del interruptor:</p>
      <button
        onClick={toggle}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isOn ? '#4CAF50' : '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
      >
        {isOn ? 'Apagado' : 'Encendido'}
      </button>
    </div>
  );
};

export default ToggleButton;
