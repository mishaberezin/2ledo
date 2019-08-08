import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TaskCreationScreen from '../screens/TaskCreationScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

HomeStack.path = '';

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

SettingsStack.path = '';

const TaskCreationStack = createStackNavigator({
  TaskCreation: TaskCreationScreen
});

TaskCreationStack.navigationOptions = {
  tabBarLabel: 'TaskCreation',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-code' : 'md-code'}
    />
  )
};

TaskCreationStack.path = '';

const MainStack = createBottomTabNavigator(
  {
    TaskCreationStack,
    HomeStack,
    SettingsStack
  },
  {
    initialRouteName: 'HomeStack'
  }
);

MainStack.path = '';

export default MainStack;
