import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AlertBox = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  width: 400px;
  font-size: 18px;

  ${(props) => {
    switch (props.severity) {
      case 'success':
        return `
          background-color: #d4edda;
          border-color: #c3e6cb;
          color: #155724;
        `;
      case 'error':
        return `
          background-color: #f8d7da;
          border-color: #f5c6cb;
          color: #721c24;
        `;
      case 'warning':
        return `
          background-color: #fff3cd;
          border-color: #ffeeba;
          color: #856404;
        `;
      default:
        return '';
    }
  }}
`;

const Alert = ({ severity, children }) => {
  return (
    <AlertBox severity={severity}>
      {children}
    </AlertBox>
  );
};

export { AlertContainer, Alert };