import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import InitScreen from './screens/InitScreen';
import SerpScreen from './screens/SerpScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import { SettingsCardScreen } from './screens/SettingsCardScreen';
import { SettingsTuneScreen } from './screens/SettingsTuneScreen';
import { SettingsUserScreen } from './screens/SettingsUserScreen';

import FavoritesScreen from './screens/FavoritesScreen';
import CardScreen from './screens/CardScreen';

import { NavHeader } from './components/NavHeader';

const SettingsStack = createStackNavigator(
  {
    Card: SettingsCardScreen,
    User: SettingsUserScreen,
    Tune: SettingsTuneScreen,
  },
  {
    initialRouteName: 'Card',

    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: (
          <NavHeader
            title="Настройки"
            menuItems={[
              { text: 'Карточка', onPress: () => navigation.navigate('Card') },
              { text: 'О себе', onPress: () => navigation.navigate('User') },
              { text: 'Прочее', onPress: () => navigation.navigate('Tune') },
            ]}
          />
        ),
      };
    },
  }
);

SettingsStack.navigationOptions = {
  title: '⚙️',
};

const FavoritesStack = createStackNavigator(
  {
    FavoritesMain: FavoritesScreen,
    CardDetail: {
      screen: CardScreen,
      //navigationOptions: ({ navigation }) => ({ title: navigation.state.params.title }),
      navigationOptions: ({ navigation }) => {
        return {
          header: (
            <NavHeader
              title={'Просмотр'}
              menuItems={[
                {
                  text: 'Назад',
                  onPress: () => {
                    navigation.navigate('FavoritesMain');
                  },
                },
              ]}
            />
          ),
        };
      },
    },
  },
  {
    initialRouteName: 'FavoritesMain',
    defaultNavigationOptions: () => {
      return {
        header: (
          <NavHeader
            title="Избранное"
            menuItems={[{ text: 'Фото' }, { text: 'Место' }, { text: 'Цена' }]}
          />
        ),
      };
    },
  }
);

FavoritesStack.navigationOptions = {
  title: '💌',
};

const MainStack = createBottomTabNavigator(
  {
    Chat: ChatScreen,
    Serp: SerpScreen,
    Settings: SettingsStack,
    Favorites: FavoritesStack,
  },
  {
    initialRouteName: 'Settings',
  }
);

export const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      Init: InitScreen,
      Main: MainStack,
      Login: LoginScreen,
    },
    {
      initialRouteName: 'Init',
    }
  )
);
