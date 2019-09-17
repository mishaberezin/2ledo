import React from 'react';
import { View, Text } from 'react-native';

export function SettingsUserGender(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsUserGender: {value}</Text>
    </View>
  );
}
