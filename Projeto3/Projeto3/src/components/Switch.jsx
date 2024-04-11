import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.size === 'small' ? '30px' : props.size === 'medium' ? '40px' : '50px'};
  height: ${props => props.size === 'small' ? '15px' : props.size === 'medium' ? '20px' : '25px'};
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 20px;
  background-color: green;
  position: relative;
`;

const Inner = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: gray;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform 0.3s, background-color 0.3s;

  ${Input}:checked + ${Label} & {
    background-color: #fff;
    transform: translateX(19px);
  }
`;

const SwitchButton = styled.span`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  transition: left 0.3s;

  ${Input}:checked + ${Label} & {
    left: 19px;
  }
`;

const Switch = ({ on, toggle, size }) => {
  return (
    <Wrapper size={size}>
      <Input type="checkbox" checked={on} onChange={toggle} />
      <Label>
        <Inner />
        <SwitchButton />
      </Label>
    </Wrapper>
  );
};

export default Switch;