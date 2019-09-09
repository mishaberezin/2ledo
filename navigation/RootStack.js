import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import InitScreen from '../screens/InitScreen';
// import TaskCreationScreen from '../screens/TaskCreationScreen';
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
    // TaskCreation: TaskCreationScreen,
    Settings: SettingsStack,
    Match: MatchScreen,
    Favorites: FavoritesStack,
  },
  {
    initialRouteName: 'Serp',
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
