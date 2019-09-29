import React, { useCallback } from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash.png')}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <LoginForm onSuccess={handleSuccess} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    position: 'absolute',
  },
  image: {
    flex: 1,
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
