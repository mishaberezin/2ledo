import React from 'react';
import { View, Text } from 'react-native';

export function SettingsUserPhotos(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsUserPhotos: {value}</Text>
    </View>
  );
}
