import React, { useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import COLORS from '../constants/appColors';

// import FavoritesGroupsList from '../components/FavoritesGroupsList';
import FavoritesList from '../components/FavoritesList';
import PlateWithContent from '../components/PlateWithContent';
import serverData from '../server';

const groups = [
  { title: 'Да', items: serverData.serpData.slice(0, 2) },
  { title: 'Думаем', items: serverData.serpData.slice(2) },
];

const FavoritesScreen = ({ navigation }) => {
  const onItemPress = useCallback(item => {
    navigation.navigate({
      routeName: 'CardDetail',
      params: { item },
    });
  });

  return (
    <Layout style={styles.container}>
      <ScrollView>
        <FavoritesList
          title={groups[0].title}
          items={groups[0].items}
          onItemPress={onItemPress}
          withCat
        />
        <FavoritesList
          title={groups[1].title}
          items={groups[1].items}
          onItemPress={onItemPress}
          withCat
        />

        <PlateWithContent title="Что-то тут">
          <Text>Привет теперь!</Text>
          <Text>Еще немного текста тут</Text>
        </PlateWithContent>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.screenBackground,
  },
});

export default FavoritesScreen;
