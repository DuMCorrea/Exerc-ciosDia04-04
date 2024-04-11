import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from './components/Switch';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <Container>
      <h1>Clique para habilitar</h1>
      <Switch on={isOn} toggle={toggleSwitch} size="medium" />
    </Container>
  );
}

export default App;
