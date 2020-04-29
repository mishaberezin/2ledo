import React from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import LoginForm from '../components/Login/LoginForm';
import { setUserToken } from '@app/redux/actions/login-actions';

import { SCREEN_WIDTH } from '@app/constants/device';

export const Login = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const handleSuccess = async (token) => {
    await dispatch(setUserToken(token));
    navigation.navigate('Init');
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/splash.png')}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LoginForm onSuccess={handleSuccess} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
});
