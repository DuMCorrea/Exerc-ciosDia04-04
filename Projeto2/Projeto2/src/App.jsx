import React from 'react';
import { AlertContainer, Alert } from './components/Alert';

const App = () => {
  return (
    <AlertContainer>
      <Alert severity="success">Operação bem-sucedida!</Alert>
      <Alert severity="error">Erro ao processar os dados.</Alert>
      <Alert severity="warning">Atenção: dados incompletos.</Alert>
    </AlertContainer>
  );
};

export default App;
