import React from 'react';
import styled from 'styled-components';

const KbdWrapper = styled.kbd`
  display: inline-block;
  border: 1px solid #ccc;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
`;

const Kbd = ({ children }) => {
  return <KbdWrapper>{children}</KbdWrapper>;
};

export default Kbd;