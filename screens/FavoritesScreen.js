import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import { SCREEN_BACKGROUND } from '../constants/colors';

import FavoritesGroupsList from '../components/FavoritesGroupsList';

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
      <FavoritesGroupsList onItemPress={onItemPress} />
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
