import React from 'react';
import { View, Text } from 'react-native';

export function SettingsNumberOfPeopleRange(props) {
  const { value } = props;

  return (
    <View>
      <Text>SettingsNumberOfPeopleRange: {value}</Text>
    </View>
  );
}
