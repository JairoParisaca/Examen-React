import React, { useState } from 'react';
import Greeting from '../components/Greeting';
import ToggleButton from '../components/ToggleButton';
import Card from '../components/Card';

const Home: React.FC = () => {
  const [name, setName] = useState('Usuario');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>Home Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="nameInput" style={{ marginRight: '10px' }}>Ingresa tu nombre:</label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <Greeting name={name} />
      <div style={{ margin: '20px 0' }}>
        <ToggleButton />
      </div>
      <Card title="Examen de Jairo " content="no me repruebe inge" />
    </div>
  );
};

export default Home;
