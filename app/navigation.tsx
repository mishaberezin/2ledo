import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import { MatchIndicatorButton } from './components/match-indicator-button';
// import ChatScreen from './screens/ChatScreen';
// import { LoginScreen } from './screens/login';

import { Serp } from './screens/serp';
import { SettingsCard } from './screens/settings-card';
import { SettingsTune } from './screens/settings-tune';
import { SettingsUser } from './screens/settings-user';
import { SettingsPreview } from './screens/settings-card-preview';
import { FavsScreen } from './screens/favs';
import { Card } from './screens/card';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavHeader } from './components/nav-header';

const SerpStack = createStackNavigator();
const SerpStackScreen = () => {
  return (
    <SerpStack.Navigator initialRouteName="Serp">
      <SerpStack.Screen
        name="Serp"
        component={Serp}
        options={({ navigation, route }) => ({
          headerLeftContainerStyle: {
            flexDirection: 'row',
          },
          headerLeft: () => (
            <Fragment>
              <Button
                buttonStyle={{
                  justifyContent: 'space-between',
                }}
                type="clear"
                icon={{ type: 'material', name: 'person' }}
                onPress={() => navigation.navigate('SettingsStackScreen')}
              />
              <Button
                buttonStyle={{
                  justifyContent: 'space-between',
                }}
                type="clear"
                icon={{ type: 'entypo', name: 'map' }}
                onPress={() => navigation.navigate('SettingsStackScreen')}
                disabled={true}
                disabledStyle={{
                  opacity: 0.3,
                }}
              />
            </Fragment>
          ),
          headerRight: () => (
            <MatchIndicatorButton
              onPress={() => {
                navigation.navigate('FavsStackScreen');
              }}
            />
          ),
        })}
      />
      <SerpStack.Screen name="Card" component={Card} />
    </SerpStack.Navigator>
  );
};

const FavsStack = createStackNavigator();
const FavsStackScreen = () => {
  return (
    <FavsStack.Navigator
      initialRouteName="Favs"
      screenOptions={{ title: 'Избранное' }}
    >
      <FavsStack.Screen name="Favs" component={FavsScreen} />
      <FavsStack.Screen name="Card" component={Card} />
    </FavsStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      initialRouteName="SettingsCard"
      screenOptions={{
        header: ({ scene, navigation }) => {
          let cardItem;

          if (scene.route.name === 'SettingsCard') {
            cardItem = {
              text: 'Превью',
              style: { color: 'blue' },
              onPress: () => navigation.navigate('SettingsPreview'),
            };
          } else {
            cardItem = {
              text: 'Карточка',
              onPress: () => navigation.navigate('SettingsCard'),
            };
          }

          return (
            <NavHeader
              title="Настройки"
              menuItems={[
                cardItem,
                {
                  text: 'О себе',
                  onPress: () => navigation.navigate('SettingsUser'),
                },
                {
                  text: 'Прочее',
                  onPress: () => navigation.navigate('SettingsTune'),
                },
              ]}
            />
          );
        },
      }}
    >
      <SettingsStack.Screen name="SettingsCard" component={SettingsCard} />
      <SettingsStack.Screen name="SettingsTune" component={SettingsTune} />
      <SettingsStack.Screen name="SettingsUser" component={SettingsUser} />
      <SettingsStack.Screen
        name="SettingsPreview"
        component={SettingsPreview}
      />
    </SettingsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
// const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="SettingsStackScreen"
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
    >
      <Tab.Screen
        name="SerpStackScreen"
        options={{
          tabBarLabel: 'Лента',
          tabBarIcon: () => <Text>🔥</Text>,
        }}
        component={SerpStackScreen}
      />
      <Tab.Screen
        name="SettingsStackScreen"
        options={{
          tabBarLabel: 'Настройки',
          tabBarIcon: () => <Text>⚙️</Text>,
        }}
        component={SettingsStackScreen}
      />
      <Tab.Screen
        name="FavsStackScreen"
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: () => <Text>💚</Text>,
        }}
        component={FavsStackScreen}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

// ChatScreen.navigationOptions = {
//   title: '🤖',
// };

// FavoritesStack.navigationOptions = ({ navigation }) => ({
//   headerLeft: (
//     <Button
//       buttonStyle={{
//         height: 56,
//         justifyContent: 'space-between',
//       }}
//       type="clear"
//       icon={{ type: 'ionicon', name: 'ios-arrow-back' }}
//       onPress={() => navigation.navigate('Serp')}
//     />
//   ),
//   headerRight: null,
// });

// export const Navigation = createAppContainer(
//   createSwitchNavigator(
//     {
//       Init: InitScreen,
//       Main: MainStack,
//       Login: LoginScreen,
//       Chat: ChatScreen,
//     },
//     {
//       initialRouteName: 'Init',
//     },
//   ),
// );
