import React from 'react';
import NavHeader from '../components/NavHeader';
import { createStackNavigator } from 'react-navigation';
import SettingsScreen from '../screens/SettingsScreen';
// import SettingsTuneScreen from '../screens/SettingsTuneScreen';
import SettingsDataScreen from '../screens/SettingsDataScreen';
import SettingsUserScreen from '../screens/SettingsUserScreen';

const SettingsStack = createStackNavigator(
  {
    Tune: SettingsScreen,
    // Tune: SettingsTuneScreen,
    Data: SettingsDataScreen,
    User: SettingsUserScreen,
  },
  {
    initialRouteName: 'Tune',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: (
          <NavHeader
            title="Настройки"
            menuItems={[
              { text: 'Ищу', onPress: () => navigation.navigate('Tune') },
              // { text: 'Предлагаю', onPress: () => navigation.navigate('Data') },
              // { text: 'О себе', onPress: () => navigation.navigate('User') },
            ]}
          />
        ),
      };
    },
  }
);

export default SettingsStack;
