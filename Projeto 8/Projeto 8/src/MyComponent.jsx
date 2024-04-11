import React from 'react';
import styled from 'styled-components';
import useHover from './useHover';

const Container = styled.div`
text-align: center; 
font-size: 25px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

function MyComponent() {
  const [hoverRef, isHovered] = useHover();

  return (
    <Container ref={hoverRef}>
      {isHovered ? 'Está em hover' : 'Não está em hover' }
    </Container>
  );
}

export default MyComponent;