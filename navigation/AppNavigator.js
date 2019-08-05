import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import InitialScreen from "../screens/InitialScreen";
import MainTabNavigator from "./MainTabNavigator";
import DemoStack from "./DemoStack";
import AuthStack from "./AuthStack";
import SetupStack from "./SetupStack";

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitialScreen,
      Main: MainTabNavigator,
      // Demo: DemoStack,
      Auth: AuthStack,
      Setup: SetupStack
    },
    {
      initialRouteName: "Init"
    }
  )
);
