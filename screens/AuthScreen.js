import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';

const AuthScreen = props => {
  const { navigation } = props;

  const [telValue, setTelValue] = useState('');
  const [smsValue, setSmsValue] = useState('');
  const handleTelChange = useCallback(e => {
    setTelValue(e.target.value);
  });
  const handleSmsChange = useCallback(e => {
    setSmsValue(e.target.value);

    // XXX
    navigation.navigate('Setup');
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/welcome.jpg')}
      />
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Телефон"
        textContentType="telephoneNumber"
        returnKeyType="done"
        value={telValue}
        onChange={handleTelChange}
      />
      <TextInput
        style={[styles.input, styles.sms]}
        keyboardType="phone-pad"
        placeholder="Код из смс"
        textContentType="oneTimeCode"
        returnKeyType="done"
        value={smsValue}
        onChange={handleSmsChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    height: '65%'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    height: 40,
    width: 200,
    marginTop: 20
  }
});

export default AuthScreen;
