import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { initChatbotAction } from '../redux/actions/chatbotActions';
import Conversation from '../components/Conversation';

function ChatScreen({ initChatbotAction }) {
  useEffect(() => {
    initChatbotAction();
  }, [initChatbotAction]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Conversation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  main: {
    flex: 1,
  },
});

export default connect(
  null,
  { initChatbotAction }
)(ChatScreen);
