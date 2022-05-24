import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Splash } from "../screens/Splash";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { MyCars } from "../screens/MyCars";

const { Navigator, Screen } = createStackNavigator<AppRoutes>();

export type AppRoutes = {
  Home: undefined;
  Splash: undefined;
  CarDetails: { car: any } | undefined;
  Scheduling: { car: any } | undefined;
  SchedulingComplete: undefined;
  SchedulingDetails: { car: any; dates: any[] } | undefined;
  MyCars: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes {}
  }
}

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen name="Home" component={Home} />
      <Screen name="Splash" component={Splash} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
