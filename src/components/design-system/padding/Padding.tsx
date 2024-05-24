import styled from 'styled-components';

export const Padding = styled.div<{
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}>`
  padding-top: ${({ top }) => top || '0px'};
  padding-bottom: ${({ bottom }) => bottom || '0px'};
  padding-left: ${({ left }) => left || '0px'};
  padding-right: ${({ right }) => right || '0px'};
`;
