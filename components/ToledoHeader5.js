import React from 'react';
import { Text } from 'react-native';
import COLORS from '../constants/colors';

function ToledoHeader4(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: 'ceracy-desktop-bold',
          fontSize: 22,
          lineHeight: 32,
          color: COLORS.textColor,
        },
      ]}
    />
  );
}

export default ToledoHeader4;
