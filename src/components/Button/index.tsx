import React from "react";

import { Container, Title } from "./styles";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  onPress,
  color,
  enabled = true,
  loading = false,
}: Props) {
  const theme = useTheme();

  return (
    <Container
      onPress={onPress}
      color={color ? color : theme.colors.main}
      enabled={enabled || !loading}
      style={{ opacity: !enabled || loading ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
