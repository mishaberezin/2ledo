import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native';
import {
  setUserName,
  setUserPhoneNumber,
  setUserPhoto,
} from '../redux/actions/userActions';

function ChatScreen(props) {
  const {
    user,
    navigation,
    setUserName,
    setUserPhoneNumber,
    setUserPhoto,
  } = props;

  const everythingIsDone = user.name && user.phoneNumber && user.photo;
  const onDataButtonPress = () => {
    if (!user.name) {
      setUserName('Misha');
      return;
    }
    if (!user.phoneNumber) {
      setUserPhoneNumber('+79998881123');
      return;
    }
    if (!user.photo) {
      setUserPhoto('🐻');
      return;
    }

    alert('Everything is done!');
  };
  const onNextButtonPress = () => {
    navigation.navigate('Serp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.buttonContainer}>
          <Text>Phone: {user.phoneNumber}</Text>
          <Text>Name: {user.name}</Text>
          <Text>Photo: {user.photo}</Text>
          <Button
            style={styles.button}
            type="outline"
            title="Provide Welcome Data"
            onPress={onDataButtonPress}
          />
          <Button
            style={styles.button}
            type="outline"
            title="Next"
            disabled={!everythingIsDone}
            onPress={onNextButtonPress}
          />
        </View>
      </View>
    </View>
  );
}

ChatScreen.navigationOptions = {
  title: '🤖',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },

  button: {
    width: '100%',
  },

  buttonContainer: {
    margin: 10,
  },
});

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = { setUserName, setUserPhoneNumber, setUserPhoto };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);
