import React from 'react';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';

const ChatMessage = ({ style, message }) => {
  const { author } = message;
  return author === 'user' ? (
    <RightMessage message={message} style={style} />
  ) : (
    <LeftMessage message={message} style={style} />
  );
};

export default ChatMessage;
