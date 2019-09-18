import React from 'react';
import { View, Text } from 'react-native';

export function SettingsUserPhones(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsUserPhones: {value}</Text>
    </View>
  );
}
