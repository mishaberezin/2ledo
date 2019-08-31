import React from 'react';
import NavHeader from '../components/NavHeader';
import { createStackNavigator } from 'react-navigation';
import FavoritesScreen from '../screens/FavoritesScreen';

const FavoritesStack = createStackNavigator(
  {
    FavoritesMain: FavoritesScreen,
  },
  {
    initialRouteName: 'FavoritesMain',
    defaultNavigationOptions: () => {
      return {
        header: (
          <NavHeader
            title="Избранное"
            menuItems={[{ text: 'Фото' }, { text: 'Место' }, { text: 'Цена' }]}
          />
        ),
      };
    },
  }
);

export default FavoritesStack;
