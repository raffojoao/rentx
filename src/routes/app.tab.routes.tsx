import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackRoutes } from "./app.stack.routes";
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { Profile } from "../screens/Profile";
import { AppRoutes } from ".";
import { useTheme } from "styled-components";

import CarSvg from "../assets/car.svg";
import HomeSvg from "../assets/home.svg";
import PeopleSvg from "../assets/people.svg";

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 78,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: theme.colors.background_primary,
        },
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
      }}
    >
      <Screen
        name="HomeTab"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
