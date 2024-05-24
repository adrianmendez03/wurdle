import React from 'react';
import styled from 'styled-components';
import { Key } from './Key';
import { SIZES } from '../design-system/tokens';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.GAP.MD};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${SIZES.GAP.SM};
`;

export const Keyboard = () => (
  <Column>
    <Row>
      <Key label="Q" />
      <Key label="W" />
      <Key label="E" />
      <Key label="R" />
      <Key label="T" />
      <Key label="Y" />
      <Key label="U" />
      <Key label="I" />
      <Key label="O" />
      <Key label="P" />
    </Row>
    <Row>
      <Key label="A" />
      <Key label="S" />
      <Key label="D" />
      <Key label="F" />
      <Key label="G" />
      <Key label="H" />
      <Key label="J" />
      <Key label="K" />
      <Key label="L" />
    </Row>
    <Row>
      <Key miniLabel label="ENTER" />
      <Key label="Z" />
      <Key label="X" />
      <Key label="C" />
      <Key label="V" />
      <Key label="B" />
      <Key label="N" />
      <Key label="M" />
      <Key miniLabel label="DELETE" />
    </Row>
  </Column>
);
