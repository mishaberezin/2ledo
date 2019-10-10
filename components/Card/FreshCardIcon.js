import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default () => (
  <View style={styles.cardIsFreshIcon}>
    <Ionicons name="ios-flame" size={42} color={'orange'} />
  </View>
);

const styles = StyleSheet.create({
  cardIsFreshIcon: {
    alignSelf: 'flex-end',
    flex: 1,
    padding: 5,
    paddingRight: 10,
  },
});
