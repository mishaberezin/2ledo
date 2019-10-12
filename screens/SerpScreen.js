import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckWithControllsContainer from '@toledo/components/DeckWithControllsContainer';

function SerpScreen() {
  return (
    <View style={styles.container}>
      <DeckWithControllsContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SerpScreen;
