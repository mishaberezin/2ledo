import React from "react";
import { useSelector } from "react-redux";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AuthScreen,
  SerpScreen,
  FavsScreen,
  CardScreen,
  SettingsScreen,
} from "@src/features";
import { Button } from "react-native-elements";
import { MatchIndicatorButton } from "./components";

import { AuthStatus } from "./redux/slices";

export type MainStackParamList = {
  Serp: undefined;
  Card: undefined;
  Favs: undefined;
  Settings: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator
    initialRouteName="Serp"
    screenOptions={{ animationEnabled: false }} // TODO Написать зачем это или убрать
  >
    <MainStack.Screen
      name="Serp"
      component={SerpScreen}
      options={({ navigation }) => ({
        headerLeft: () => {
          return (
            <Button
              buttonStyle={{
                justifyContent: "space-between",
              }}
              type="clear"
              icon={{ type: "material", name: "person" }}
              onPress={() => navigation.navigate("Settings")}
            />
          );
        },
        headerRight: () => (
          <MatchIndicatorButton
            onPress={() => {
              navigation.navigate("Favs");
            }}
          />
        ),
      })}
    />
    <MainStack.Screen name="Favs" component={FavsScreen} />
    <MainStack.Screen
      name="Card"
      component={CardScreen}
      options={() => ({
        title: "",
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTintColor: "#25265E",
        headerLeftContainerStyle: {
          paddingLeft: 16,
          paddingTop: 16,
        },
      })}
    />
    <MainStack.Screen name="Settings" component={SettingsScreen} />
  </MainStack.Navigator>
);

export type AuthStackParamList = {
  Auth: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Auth" component={AuthScreen} />
  </AuthStack.Navigator>
);

export const Navigation = () => {
  const app = useSelector((state) => state.app);
  const auth = useSelector((state) => state.auth);

  const isAppLoading = app.isAppLoading || auth.status === AuthStatus.PENDING;
  const isAuthorized = auth.status === AuthStatus.AUTHORIZED;

  return isAppLoading ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      {isAuthorized ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
