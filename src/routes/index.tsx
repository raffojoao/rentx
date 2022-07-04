import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";

export type AppRoutes = {
  Home: undefined;
  HomeTab: undefined;
  Splash: undefined;
  CarDetails: { car: any } | undefined;
  Scheduling: { car: any } | undefined;
  Confirmation:
    | any
    | { title: string; message: string; nextScreenRoute: string };
  SchedulingDetails: { car: any; dates: any[] } | undefined;
  MyCars: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: { user: any };
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes {}
  }
}

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
