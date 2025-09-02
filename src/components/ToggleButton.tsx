import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button onClick={toggle}>
      {isOn ? 'Apagado' : 'Encendido'}
    </button>
  );
};

export default ToggleButton;
