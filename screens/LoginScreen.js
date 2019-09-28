import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from '../components/Login/LoginForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setUserToken } from '../redux/actions/loginActions';

const LoginScreen = ({ setUserToken, navigation }) => {
  const handleSuccess = useCallback(
    token => {
      setUserToken(token);
      navigation.navigate('Init');
    },
    [navigation, setUserToken]
  );

  return (
    <View style={styles.container}>
      <LoginForm onSuccess={handleSuccess} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
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
