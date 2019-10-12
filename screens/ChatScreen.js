import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { initChatbotAction } from '../redux/actions/chatbotActions';
import Conversation from '../components/Conversation';

function ChatScreen({ navigation, initChatbotAction }) {
  useEffect(() => {
    initChatbotAction();
  }, [initChatbotAction]);

  const navigate = useCallback(screen => {
    navigation.navigate(screen);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Conversation navigate={navigate} />
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
