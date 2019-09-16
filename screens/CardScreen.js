import React from 'react';
import { View, StyleSheet } from 'react-native';

import ItemDetailCard from '../components/ItemDetailCard';
import serverData from '../server';

function CardScreen(props) {
  const { navigation } = props;
  const { id: itemId } = navigation.getParam('item');

  const item = serverData.serpData.find(({ id }) => id === itemId);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ItemDetailCard {...item} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CardScreen;
