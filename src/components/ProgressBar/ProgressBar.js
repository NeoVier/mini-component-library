/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--border-radius': '4px',
    '--height': '8px',
    '--padding': '0',
  },
  medium: {
    '--border-radius': '4px',
    '--height': '12px',
    '--padding': '0',
  },
  large: {
    '--border-radius': '8px',
    '--height': '24px',
    '--padding': '4px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (
    <Wrapper value={value} max="100" style={styles} aria-label="Loading..."></Wrapper>
  );
};

const Wrapper = styled.progress`
  width: 370px;
  height: var(--height);
  padding: var(--padding);

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  appearance: none;
  border: none;

  border-radius: var(--border-radius);

  &::-webkit-progress-inner-element {
    border-radius: 4px;
    overflow: hidden;
  }

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    transition: width 150ms ease-in-out;
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: ${props => props.value === 100 ? '4px' : '4px 0 0 4px'};
  }
`;


export default ProgressBar;
