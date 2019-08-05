import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { MonoText } from '../components/StyledText';

const SetupScreen = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <MonoText>SETUP</MonoText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default SetupScreen;
