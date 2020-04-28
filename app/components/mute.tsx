import React from 'react';
import { View } from 'react-native';

export const Mute = (props) => {
  const { children } = props;

  return (
    <View
      style={{
        opacity: 0.5,
      }}
    >
      {children}
    </View>
  );
};
