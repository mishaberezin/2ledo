import React from 'react';
import { View, Text } from 'react-native';

export function SettingsCoords(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsCoords: {value}</Text>
    </View>
  );
}
