import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: #ddd;
`;

const Progress = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  border-radius: 10px;
  background-color: ${props => props.color};
  transition: width 0.5s ease;
`;

const ProgressBar = ({ value, color }) => {
  return (
    <ProgressBarWrapper>
      <Progress value={value} color={color} />
    </ProgressBarWrapper>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;