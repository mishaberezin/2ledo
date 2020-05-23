import React from 'react';
import { useSelector } from 'react-redux';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AuthScreen,
  SerpScreen,
  FavsScreen,
  CardScreen,
  SettingsScreen,
} from '@src/features';
import { Button } from 'react-native-elements';
import { MatchIndicatorButton } from './components';

import { AuthStatus } from './redux/slices';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
    initialRouteName="SerpStackScreen"
    screenOptions={{ animationEnabled: false }}
  >
    <MainStack.Screen
      name="Serp"
      component={SerpScreen}
      options={({ navigation, route }) => ({
        headerLeftContainerStyle: {
          flexDirection: 'row',
        },
        headerLeft: () => {
          return (
            <Button
              buttonStyle={{
                justifyContent: 'space-between',
              }}
              type="clear"
              icon={{ type: 'material', name: 'person' }}
              onPress={() => navigation.navigate('Settings')}
            />
          );
        },
        headerRight: () => (
          <MatchIndicatorButton
            onPress={() => {
              navigation.navigate('Favs');
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
        title: '',
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTintColor: '#25265E',
        headerLeftContainerStyle: {
          paddingLeft: 16,
          paddingTop: 16
        }
      })} />
    <MainStack.Screen name="Settings" component={SettingsScreen} />
  </MainStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={AuthScreen} />
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
