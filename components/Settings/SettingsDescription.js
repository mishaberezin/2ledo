import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { SUBTITLE_COLOR, TEXT_COLOR } from '@toledo/constants/colors';
import { DEFAULT_SIDE_MARGIN } from '@toledo/constants/layout';

export function SettingsDescription(props) {
  const { value, onChange } = props;

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        paddingLeft: DEFAULT_SIDE_MARGIN,
        paddingRight: DEFAULT_SIDE_MARGIN,
        paddingTop: 18,
        paddingBottom: 18,
      }}
    >
      <Input
        label="Описание"
        multiline={true}
        numberOfLines={4}
        inputStyle={{
          lineHeight: 18,
          fontSize: 15,
          color: TEXT_COLOR,
          height: 80,
        }}
        labelStyle={{
          lineHeight: 18,
          fontSize: 13,
          color: SUBTITLE_COLOR,
        }}
        onChangeText={onChange}
        value={value}
        underlineColorAndroid="transparent"
        inputContainerStyle={{
          borderBottomWidth: 0,
          paddingLeft: 0,
        }}
      />
    </View>
  );
}
