import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

export function SettingsPriceRange(props) {
  const { optimal, onChange } = props;

  return (
    <View>
      <Text>Price:</Text>
      <Input
        value={optimal}
        onChangeText={onChange}
        label="Оптимальная цена"
        keyboardType="number-pad"
      />
    </View>
  );
}
