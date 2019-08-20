import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { List, withStyles } from 'react-native-ui-kitten';
import ChatMessage from './ChatMessage';

const json = [
  {
    id: 'bajdsadasda',
    text:
      'Привет! Я робот - пылесос, помогаю искать жилье и даю ценные советы. Хотите попробовать демо-версию?',
    type: 'demo',
    author: 'chatbot',
    controls: [
      {
        type: 'button',
        text: 'Демо',
      },
      {
        type: 'button',
        text: 'Войти',
      },
    ],
  },
  {
    id: 'nkxcbzxjhcguyadd',
    text: 'Демо',
    type: 'demo',
    author: 'user',
  },
  {
    id: 'bajdsdsaadasda',
    text:
      'Ок. У нас либо ищут, либо сдают. Какая у вас роль?',
    type: 'demo',
    author: 'chatbot',
    controls: [
      {
        type: 'button',
        text: 'Демо',
      },
      {
        type: 'button',
        text: 'Войти',
      },
    ],
  },
  {
    id: 'nkbgxcbzxjhcguyadd',
    text: 'Снять',
    type: 'demo',
    author: 'user',
  },
  {
    id: 'bajdsadasxxxda',
    text:
      'Вот как все будет, если вы ищите жилье. Можно смотреть, нажимать и двигать, но это все не по-настоящему. Когда будете готовы по-настоящему, нажмите сюда.',
    type: 'demo',
    author: 'chatbot',
    controls: [
      {
        type: 'button',
        text: 'Демо',
      },
      {
        type: 'button',
        text: 'Войти',
      },
    ],
  },
  {
    id: 'nkxcbzxjhssscguyadd',
    text: 'Готов!',
    type: 'demo',
    author: 'user',
  },
  {
    id: 'bajdsadastttda',
    text: 'Ага, вы вернулись. Введите свой телефон.',
    author: 'chatbot',
    controls: [
      {
        type: 'button',
        text: 'Демо',
      },
      {
        type: 'button',
        text: 'Войти',
      },
    ],
  },
  {
    id: 'naaakxcbzxjhcguyadd',
    text: '88005553535',
    type: 'demo',
    author: 'user',
  },
];

const ConversationContainer = ({ themedStyle }) => {
  const renderMessage = useCallback((info) => {
    return <ChatMessage style={themedStyle.message} key={info.item.id} message={info.item} />;
  }, [themedStyle.message]);

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
        data={json}
        renderItem={renderMessage} />
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
    marginVertical: 10
  }
}));

export default Conversation;
