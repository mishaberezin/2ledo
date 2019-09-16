import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckWithControllsContainer from '../components/DeckWithControllsContainer';

function SerpScreen() {
  return (
    <View style={styles.container}>
      <DeckWithControllsContainer />
    </View>
  );
}

SerpScreen.navigationOptions = {
  title: '🗂',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});

export default SerpScreen;
