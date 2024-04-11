import React, { useState } from 'react';
import styled from 'styled-components';
import usePrevious from '../hooks/usePrevious';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CounterContainer = styled.div`
  text-align: center;
`;

const CounterValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PreviousValue = styled.p`
  font-size: 18px;
  color: #666;
`;

const IncrementButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <Container>
      <CounterContainer>
        <CounterValue>Current Count: {count}</CounterValue>
        <PreviousValue>Previous Count: {previousCount !== null ? previousCount : 'N/A'}</PreviousValue>
        <IncrementButton onClick={() => setCount(count + 1)}>Increment</IncrementButton>
      </CounterContainer>
    </Container>
  );
}

export default Counter;