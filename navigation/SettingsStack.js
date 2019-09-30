import React from 'react';
import NavHeader from '../components/NavHeader';
import { createStackNavigator } from 'react-navigation-stack';
import { SettingsCardScreen } from '../screens/SettingsCardScreen';
import { SettingsTuneScreen } from '../screens/SettingsTuneScreen';
import { SettingsUserScreen } from '../screens/SettingsUserScreen';

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

export default SettingsStack;
