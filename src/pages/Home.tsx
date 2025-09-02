import React from 'react';
import Greeting from '../components/Greeting';
import ToggleButton from '../components/ToggleButton';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Greeting name="Usuario" />
      <ToggleButton />
      <Card title="Ejemplo de Card" content="Este es un ejemplo de componente Card." />
    </div>
  );
};

export default Home;
