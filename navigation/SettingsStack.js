import React from 'react';
import NavHeader from '../components/NavHeader';
import { createStackNavigator } from 'react-navigation';
import SettingsCardScreen from '../screens/SettingsCardScreen';
// import SettingsDataScreen from '../screens/SettingsDataScreen';
import SettingsUserScreen from '../screens/SettingsUserScreen';

const SettingsStack = createStackNavigator(
  {
    Card: SettingsCardScreen,
    User: SettingsUserScreen,
    // Misc: SettingsMiscScreen,
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
              // { text: 'Прочее', onPress: () => navigation.navigate('Misc') },
            ]}
          />
        ),
      };
    },
  }
);

export default SettingsStack;
