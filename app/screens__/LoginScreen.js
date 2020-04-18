import React, { useCallback } from 'react';
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { SCREEN_WIDTH } from '../constants/device';
import LoginForm from '../components/Login/LoginForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setUserToken } from '../redux/actions/loginActions';

const LoginScreen = ({ setUserToken, navigation }) => {
  const handleSuccess = useCallback(
    token => {
      setUserToken(token).then(() => {
        navigation.navigate('Init');
      });
    },
    [navigation, setUserToken]
  );

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUserToken,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);
