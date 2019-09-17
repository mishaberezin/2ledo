import React from 'react';
import { View, Text } from 'react-native';

export function SettingsUserBirthYear(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsUserBirthYear: {value}</Text>
    </View>
  );
}
