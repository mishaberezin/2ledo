import React from 'react';
import { View, Text } from 'react-native';

export function SettingsAddress(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsAddress: {value}</Text>
    </View>
  );
}
