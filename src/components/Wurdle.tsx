import React from 'react';
import styled from 'styled-components';
import { COLORS } from './design-system/tokens/colors';
import { Keyboard } from './Keyboard';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${COLORS.BACKGROUND.DARK};
  height: 100%;
`;

export const Wurdle = () => (
  <Background>
    <Keyboard />
  </Background>
);
