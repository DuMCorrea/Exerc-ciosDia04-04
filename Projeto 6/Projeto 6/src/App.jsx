import React from 'react';
import styled from 'styled-components';
import Kbd from './components/Kbd';

const AppContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
`;

const Content = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Content>
        <h1>A seguir os combos que você pode executar!</h1>
        <p>
          Pressione <Kbd>Shift</Kbd> + <Kbd>z</Kbd> para o combo padrão.
        </p>
        <p>
          Pressione <Kbd>Shift</Kbd> + <Kbd>x</Kbd> para o combo especial.
        </p>
        <p>
          Pressione <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>c</Kbd> para o super mega potente combo.
        </p>
      </Content>
    </AppContainer>
  );
};

export default App;
