import React from 'react';
import SettingsHeader from '../components/SettingsHeader';
import { createStackNavigator } from 'react-navigation';
import SettingsTuneScreen from '../screens/SettingsTuneScreen';
import SettingsDataScreen from '../screens/SettingsDataScreen';
import SettingsUserScreen from '../screens/SettingsUserScreen';

const SettingsStack = createStackNavigator(
  {
    Tune: SettingsTuneScreen,
    Data: SettingsDataScreen,
    User: SettingsUserScreen,
  },
  {
    initialRouteName: 'Tune',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: (
          <SettingsHeader
            onTunePress={() => navigation.navigate('Tune')}
            onDataPress={() => navigation.navigate('Data')}
            onUserPress={() => navigation.navigate('User')}
          />
        ),
      };
    },
  }
);

export default SettingsStack;
