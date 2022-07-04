import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

interface Navigation {
  navigate: (value: string) => void;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<Navigation>();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleGoHome() {
    navigation.navigate(nextScreenRoute);
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Home" }],
    // });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>
          {message}
          {/* Agora você só precisa ir {"\n"}até a concessionária da RENTX {"\n"}
          pegar o seu automível. */}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleGoHome} />
      </Footer>
    </Container>
  );
}
