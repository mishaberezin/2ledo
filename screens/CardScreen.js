import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ItemDetailCard } from '../components/Card';
import serverData from '../redux/__sampleState';

function CardScreen(props) {
  const { navigation } = props;
  const { id: itemId } = navigation.getParam('item');

  const item = serverData.deck.find(({ id }) => id === itemId);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ItemDetailCard card={item.data} />
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
