import React from "react";
import LottieView from "lottie-react-native";

import { Container } from "./styles";
import carAnimated from "../../assets/load_animated.json";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={carAnimated}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
