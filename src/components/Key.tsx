import React from 'react';
import styled from 'styled-components';
import { Text } from './design-system/Text';
import { COLORS, SIZES } from './design-system/tokens';

const Container = styled.button`
  background-color: ${COLORS.BACKGROUND.GREY};
  border-radius: ${SIZES.BORDER_RADIUS.XS};
  border: none;
`;

const Padding = styled.div`
  padding: ${SIZES.PADDING.LG} ${SIZES.PADDING.MD}};
`;

type Props = {
  label: string;
  miniLabel?: boolean;
};

export const Key = ({ label, miniLabel }: Props) => (
  <Container>
    <Padding>
      <Text
        fontSize={miniLabel ? SIZES.TYPOGRAPHY.SM : SIZES.TYPOGRAPHY.MD}
        fontWeight="bold"
      >
        {label}
      </Text>
    </Padding>
  </Container>
);
