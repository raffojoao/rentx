import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";

const { Navigator, Screen } = createStackNavigator<AppRoutes>();

export type AppRoutes = {
  Home: undefined;
  CarDetails: { car: any } | undefined;
  Scheduling: { car: any } | undefined;
  SchedulingComplete: undefined;
  SchedulingDetails: { car: any; dates: any[] } | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes {}
  }
}

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  );
}
