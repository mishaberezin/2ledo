import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import InitScreen from '../screens/InitScreen';
import SerpScreen from '../screens/SerpScreen';
import CardScreen from '../screens/CardScreen';
import ChatScreen from '../screens/ChatScreen';
import MatchScreen from '../screens/MatchScreen';
import SettingsStack from './SettingsStack';
import FavoritesStack from './FavoritesStack';

const MainStack = createBottomTabNavigator(
  {
    Chat: ChatScreen,
    Serp: SerpScreen,
    Card: CardScreen,
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
    },
    {
      initialRouteName: 'Init',
    }
  )
);

export default RootStack;
