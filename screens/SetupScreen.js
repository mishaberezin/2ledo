import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName } from '../actions/userActions.js';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';

const SetupScreen = props => {
  const { navigation, user } = props;

  const onPress = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headView}>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Имя"
          textContentType="telephoneNumber"
          returnKeyType="done"
          value={user.name}
          onChangeText={text => {
            props.setUserName(text);
          }}
        />
      </View>
      <View style={styles.mainView}>
        <Text style={styles.textName}>{user.name}</Text>
        <Button title="Дальше поехали 🚍" onPress={onPress} />
      </View>
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
  input: {
    fontSize: 40
  },
  textName: {
    fontSize: 40
  },
  headView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUserName
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen);
