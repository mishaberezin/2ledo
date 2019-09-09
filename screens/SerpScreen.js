import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwipeDeckWithControlls from '../components/SwipeDeckWithControlls';

function SerpScreen() {
  return (
    <View style={styles.container}>
      <SwipeDeckWithControlls />
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
