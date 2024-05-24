import React, { ReactNode } from 'react';
import styled from 'styled-components';

type FlexProps = {
  children?: ReactNode[];
  flexDirection: 'row' | 'column';
  gap?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

type APIFlexProps = Omit<FlexProps, 'flexDirection'>;

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  gap: ${({ gap }) => gap || 'normal normal'};
`;

export const Column = (props: APIFlexProps) => (
  <FlexContainer flexDirection="column" {...props} />
);

export const Row = (props: APIFlexProps) => (
  <FlexContainer flexDirection="row" {...props} />
);
