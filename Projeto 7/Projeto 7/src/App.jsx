import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: ${props => props.color};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

function App() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <Container>
      <Content>
        <h1>Progresso:</h1>
        <ProgressBar value={progress} color="green" />
        <br />
        <Button color="#4caf50" hoverColor="#45a049" onClick={increaseProgress}>Aumentar Progresso</Button>
        <Button className="reset-button" color="#f44336" hoverColor="#d32f2f" onClick={resetProgress}>Resetar Progresso</Button>
      </Content>
    </Container>
  );
}

export default App;
