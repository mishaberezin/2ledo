import React from 'react';
import NavHeader from '../components/NavHeader';
import { createStackNavigator } from 'react-navigation-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import CardScreen from '../screens/CardScreen';

const FavoritesStack = createStackNavigator(
  {
    FavoritesMain: FavoritesScreen,
    CardDetail: {
      screen: CardScreen,
      //navigationOptions: ({ navigation }) => ({ title: navigation.state.params.title }),
      navigationOptions: ({ navigation }) => {
        return {
          header: (
            <NavHeader
              title={navigation.state.params.item.title}
              menuItems={[
                {
                  text: 'Назад',
                  onPress: () => {
                    navigation.navigate('FavoritesMain');
                  },
                },
              ]}
            />
          ),
        };
      },
    },
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

FavoritesStack.navigationOptions = {
  title: '💌',
};

export default FavoritesStack;
