import { createBottomTabNavigator } from 'react-navigation';
// import SettingsScreen from '../screens/SettingsScreen';
import TaskCreationScreen from '../screens/TaskCreationScreen';
import SerpScreen from '../screens/SerpScreen';
import CardScreen from '../screens/CardScreen';
import ChatScreen from '../screens/ChatScreen';
import MatchScreen from '../screens/MatchScreen';
import SettingsStack from './SettingsStack';

const MainStack = createBottomTabNavigator(
  {
    Chat: ChatScreen,
    Serp: SerpScreen,
    Card: CardScreen,
    TaskCreation: TaskCreationScreen,
    // Settings: SettingsScreen,
    Settings: SettingsStack,
    Match: MatchScreen,
  },
  {
    initialRouteName: 'Chat',
  }
);

export default MainStack;
