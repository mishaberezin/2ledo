import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TextInput, Image, Button } from 'react-native';
import interiorImage from '../assets/images/interior.png';

function AuthScreen(props) {
  const { navigation } = props;

  const [telValue, setTelValue] = useState('');
  const [smsValue, setSmsValue] = useState('');

  const handleTelChange = useCallback(e => {
    setTelValue(e.target.value);
  }, []);

  const handleSmsChange = useCallback(
    e => {
      setSmsValue(e.target.value);

      if (String(smsValue).length >= 4) {
        navigation.navigate('Setup');
      }
    },
    [navigation, smsValue]
  );

  const handleNextButtonPress = () => {
    navigation.navigate('Setup');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={interiorImage} />
      <View style={styles.form}>
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
        <Button title="Дальше поехали 🚍" onPress={handleNextButtonPress} />
      </View>
    </View>
  );
}

AuthScreen.navigationOptions = {
  title: 'Немного о себе'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#000',
    padding: 0
  },
  form: {
    flex: 1
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

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(AuthScreen);
