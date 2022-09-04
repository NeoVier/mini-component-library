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

  if (!styles) {
    throw new Error('Unknown size passed to ProgressBar: ' + size);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <FillWrapper>
        <Fill value={value}></Fill>
      </FillWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  border-radius: var(--border-radius);
`;

const FillWrapper = styled.div`
  height: 100%;
  border-radius: 4px;

  /* Trim off corners when progress bar is nearly full */
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  transform: scaleX(${p => p.value / 100});
  transform-origin: left;
  background-color: ${COLORS.primary};

  transition: transform 150ms ease-in-out;
`;

export default ProgressBar;
