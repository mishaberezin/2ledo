import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';

function MatchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text h3>Теперь ждем ...</Text>
      </View>
    </View>
  );
}

MatchScreen.navigationOptions = {
  title: '💌',
};

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

export default MatchScreen;
