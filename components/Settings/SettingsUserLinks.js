import React from 'react';
import { View, Text } from 'react-native';

export function SettingsUserLinks(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsUserLinks: {value}</Text>
    </View>
  );
}
