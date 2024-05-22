import React from 'react';
import styled from 'styled-components';
import { COLORS } from './design-system/colors';

const Background = styled.div`
  background-color: ${COLORS.background};
  height: 100%;
`;

export const Wurdle = () => <Background>Canvas!</Background>;
