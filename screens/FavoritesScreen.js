import React, { useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import { SCREEN_BACKGROUND } from '../constants/colors';

// import FavoritesGroupsList from '../components/FavoritesGroupsList';
import FavoritesList from '../components/FavoritesList';
import PlateWithContent from '../components/PlateWithContent';
import serverData from '../redux/__sampleState';

const groups = [
  { title: 'Да', items: serverData.shelf },
  { title: 'Нет', items: serverData.shelf },
];

const FavoritesScreen = ({ navigation }) => {
  const onItemPress = useCallback(
    item => {
      navigation.navigate({
        routeName: 'CardDetail',
        params: { item },
      });
    },
    [navigation]
  );

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
    backgroundColor: SCREEN_BACKGROUND,
  },
});

export default FavoritesScreen;
