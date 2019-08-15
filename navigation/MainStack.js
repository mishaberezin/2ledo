import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import TaskCreationScreen from '../screens/TaskCreationScreen';
import CardsScreen from '../components/CardsList';
import ChatScreen from '../screens/ChatScreen';

const MainStack = createBottomTabNavigator(
  {
    Chat: ChatScreen,
    Cards: CardsScreen,
    TaskCreation: TaskCreationScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Chat',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Chat':
            iconName = 'ios-leaf';
            break;

          case 'Settings':
            iconName = 'ios-options';
            break;

          case 'Cards':
            iconName = 'ios-analytics';
            break;

          case 'TaskCreation':
            iconName = 'ios-code';
            break;

          default:
            break;
        }

        return <TabBarIcon focused={focused} name={iconName} />;
      },
    }),
  }
);

MainStack.path = '';

export default MainStack;
