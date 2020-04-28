import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { List, withStyles } from '@ui-kitten/components';
import ChatMessage from './ChatMessage';
import ChatControls from './ChatControls';

const ConversationContainer = ({
  eva: { style: themedStyle },
  messages,
  navigate,
}) => {
  const renderMessage = useCallback(
    (info) => {
      return (
        <ChatMessage
          style={themedStyle.message}
          key={info.item.id}
          message={info.item}
        />
      );
    },
    [themedStyle.message],
  );

  const listRef = useMemo(() => React.createRef(), []);

  const handleListContentSizeChange = useCallback(() => {
    setTimeout(() => listRef.current.scrollToEnd({ animated: true }), 0);
  }, [listRef]);

  return (
    <View style={themedStyle.container}>
      <List
        ref={listRef}
        contentContainerStyle={themedStyle.chatContainer}
        onContentSizeChange={handleListContentSizeChange}
        data={messages}
        renderItem={renderMessage}
      />
      <ChatControls navigate={navigate} />
    </View>
  );
};

const Conversation = withStyles(ConversationContainer, () => ({
  container: {
    flex: 1,
  },
  chatContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  message: {
    marginVertical: 10,
  },
}));

const mapStateToProps = (state) => ({
  messages: state.chatbot.messages,
});

export default connect(mapStateToProps)(Conversation);
