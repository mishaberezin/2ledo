import React from 'react';
import { View, Text } from 'react-native';

export function SettingsNumberOfRooms(props) {
  const { value } = props;

  return (
    <View>
      <Text>NumberOfRooms: {value}</Text>
    </View>
  );
}
