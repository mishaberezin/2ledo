import React from 'react';
import { Text } from 'react-native';
import { TEXT_COLOR } from '@src/constants/colors';

export function ToledoHeader4(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: 'ceracy-desktop-bold',
          fontSize: 28,
          lineHeight: 32,
          color: TEXT_COLOR,
        },
      ]}
    />
  );
}
