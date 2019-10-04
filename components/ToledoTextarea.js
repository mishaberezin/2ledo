import React from 'react';
import { Input } from 'react-native-elements';
import { SUBTITLE_COLOR, TEXT_COLOR } from '@toledo/constants/colors';

export function ToledoTextarea(props) {
  const { label, value = '', onChange, numberOfLines = 4 } = props;

  return (
    <Input
      label={label}
      multiline={true}
      numberOfLines={numberOfLines}
      inputStyle={{
        lineHeight: 18,
        fontSize: 15,
        color: TEXT_COLOR,
        height: numberOfLines * 4,
        margin: 0,
        padding: 0,
      }}
      labelStyle={{
        lineHeight: 18,
        fontSize: 13,
        color: SUBTITLE_COLOR,
      }}
      containerStyle={{
        marginLeft: 0,
        padding: 0,
        paddingHorizontal: 0,
      }}
      inputContainerStyle={{
        borderBottomWidth: 0,
      }}
      onChangeText={onChange}
      value={value}
      underlineColorAndroid="transparent"
    />
  );
}
