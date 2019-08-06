import React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

const SetupScreen = props => {
  const { navigation } = props;

  const onPress = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Имя"
        textContentType="telephoneNumber"
        returnKeyType="done"
        value=""
        onChange={() => {}}
      />
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
  },
  input: {}
});

export default SetupScreen;
