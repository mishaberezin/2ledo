import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

const checkAuth = async props => {
  const userToken = await AsyncStorage.getItem("userToken");
  props.navigation.navigate(userToken ? "Main" : "Auth");
};

const InitialScreen = props => {
  checkAuth(props);
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default InitialScreen;
