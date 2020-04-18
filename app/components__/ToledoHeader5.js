import React from 'react';
import { Text } from 'react-native';
import { TEXT_COLOR } from '@toledo/constants/colors';

export function ToledoHeader5(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: 'ceracy-desktop-bold',
          fontSize: 22,
          lineHeight: 32,
          color: TEXT_COLOR,
        },
      ]}
    />
  );
}
