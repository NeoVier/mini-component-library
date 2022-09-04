import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    '--font-size': `${14 / 16}rem`,
    '--padding-left': '24px',
    '--padding-block': `${4 / 16}rem`,
    '--border-width': '1px',
  },
  large: {
    iconSize: 24,
    '--font-size': `${18 / 16}rem`,
    '--padding-left': '36px',
    '--padding-block': `${7 / 16}rem`,
    '--border-width': '2px',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const { iconSize, ...styles } = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper style={{ '--width': width + 'px', ...styles }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <CustomIcon size={iconSize} id={icon}></CustomIcon>
      <NativeInput {...delegated}></NativeInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  margin: 0;
  padding-left: var(--padding-left);
  padding-block: var(--padding-block);
  width: var(--width);

  border: none;
  border-bottom: solid var(--border-width) black;

  outline-offset: 2px;

  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const CustomIcon = styled(Icon)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: max-content;
  margin-block: auto;
`;

export default IconInput;
