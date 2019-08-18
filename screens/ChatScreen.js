import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

function ChatScreen(props) {
  const { navigation } = props;

  const onDataButtonPress = () => {
    navigation.navigate('Serp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            type="outline"
            title="Provide Welcome Data"
            onPress={onDataButtonPress}
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

export default connect(mapStateToProps)(ChatScreen);
