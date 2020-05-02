import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { LoginForm } from './login/login-form';
import { setUserToken } from '@src/redux/actions/login-actions';

import { SCREEN_WIDTH } from '@src/constants/device';

export const Login = (props) => {
  const dispatch = useDispatch();

  const handleSuccess = async (token) => {
    await dispatch(setUserToken(token));
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LoginForm onSuccess={handleSuccess} />
      </KeyboardAvoidingView>
    </View>
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
