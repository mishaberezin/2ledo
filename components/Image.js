import React from 'react';
import { View, Image } from 'react-native';

export const ProgressiveImage = props => {
  return (
    <View
      style={{
        backgroundColor: '#e1e4e8',
        width: props.style.width,
        height: props.style.height,
      }}
    >
      <Image {...props} />
    </View>
  );
};
