import React from "react";

import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  onPress: () => void;
  color?: string;
}

export function Button({ title, onPress, color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container
      onPress={onPress}
      color={color ? color : theme.colors.main}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
