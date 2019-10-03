import React from 'react';
import { View } from 'react-native';
import { Text } from 'ui-kitten';
import ToledoHeader5 from '../components/ToledoHeader5';
import { SCREEN_BACKGROUND } from '../constants/colors';

export function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: SCREEN_BACKGROUND,
        paddingTop: 10,
      }}
    >
      <Text>/setting</Text>
      <ToledoHeader5>Здесь пока ничего нет</ToledoHeader5>
    </View>
  );
}
