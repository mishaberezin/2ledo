import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const SetupScreen = props => {
  const { navigation } = props;

  const onPress = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Button title="Дальше поехали 🚍" onPress={onPress} />
    </View>
  );
};

SetupScreen.navigationOptions = {
  title: 'Немного о себе'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default SetupScreen;
