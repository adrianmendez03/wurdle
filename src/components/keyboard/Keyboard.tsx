import React from 'react';
import { Key } from './Key';
import { SIZES } from '../design-system/tokens';
import { Column, Row } from '../design-system/flex';

export const Keyboard = () => (
  <Column gap={SIZES.GAP.MD}>
    <Row gap={SIZES.GAP.SM} justifyContent="center">
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
    <Row gap={SIZES.GAP.SM} justifyContent="center">
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
    <Row gap={SIZES.GAP.SM} justifyContent="center">
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
