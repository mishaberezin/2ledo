import React from 'react';
import { View } from 'react-native';
import { Text } from 'ui-kitten';
import ToledoHeader5 from '../components/ToledoHeader5';
import COLORS from '../constants/colors';

export function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.screenBackground,
        paddingTop: 10,
      }}
    >
      <Text>/setting</Text>
      <ToledoHeader5>Здесь пока ничего нет</ToledoHeader5>
    </View>
  );
}
