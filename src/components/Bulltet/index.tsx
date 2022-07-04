import React from "react";

import { Container } from "./styles";

interface Props {
  active?: boolean;
}

export function Bulltet({ active = false }: Props) {
  return <Container active={active} />;
}
