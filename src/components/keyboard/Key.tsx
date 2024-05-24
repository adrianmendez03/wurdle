import React from 'react';
import styled from 'styled-components';
import { Padding } from '../design-system/padding';
import { Text } from '../design-system/typography';
import { COLORS, SIZES } from '../design-system/tokens';

const Container = styled.button`
  background-color: ${COLORS.BACKGROUND.GREY};
  border-radius: ${SIZES.BORDER_RADIUS.XS};
  border: none;
  padding: 0px;
  margin: 0px;
`;

type Props = {
  label: string;
  miniLabel?: boolean;
};

export const Key = ({ label, miniLabel }: Props) => (
  <Container>
    <Padding
      top={SIZES.PADDING.LG}
      bottom={SIZES.PADDING.LG}
      left={SIZES.PADDING.MD}
      right={SIZES.PADDING.MD}
    >
      <Text
        fontSize={miniLabel ? SIZES.TYPOGRAPHY.SM : SIZES.TYPOGRAPHY.MD}
        fontWeight="bold"
      >
        {label}
      </Text>
    </Padding>
  </Container>
);
