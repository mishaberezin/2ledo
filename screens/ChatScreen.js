import React from 'react';
import { View, StyleSheet } from 'react-native';
import Conversation from '../components/Conversation';

function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Conversation />
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
    paddingTop: 30
  },
  main: {
    flex: 1
  },
});

export default ChatScreen;
