import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import InitScreen from '../screens/InitScreen';
import SerpScreen from '../screens/SerpScreen';
import ChatScreen from '../screens/ChatScreen';
import MatchScreen from '../screens/MatchScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsStack from './SettingsStack';
import FavoritesStack from './FavoritesStack';

const MainStack = createBottomTabNavigator(
  {
    Chat: ChatScreen,
    Serp: SerpScreen,
    Settings: SettingsStack,
    Match: MatchScreen,
    Favorites: FavoritesStack,
  },
  {
    initialRouteName: 'Settings',
  }
);

const RootStack = createAppContainer(
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

export default RootStack;
