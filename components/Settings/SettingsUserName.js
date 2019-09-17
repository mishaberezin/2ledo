import React from 'react';
import { View, Text } from 'react-native';

export function SettingsUserName(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsUserName: {value}</Text>
    </View>
  );
}
