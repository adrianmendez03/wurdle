import styled from 'styled-components';
import { COLORS } from '../tokens/colors';
import { SIZES } from '../tokens';

export const Text = styled.div<{
  fontSize?: string;
  fontWeight?: string;
}>`
  color: ${COLORS.TYPOGRAPHY.LIGHT};
  font-size: ${({ fontSize }) => fontSize || SIZES.TYPOGRAPHY.MD};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;
