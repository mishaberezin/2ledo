import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-ui-kitten';

export function SettingsPriceRange() {
  const [lowLimitValue, setLowLimitValue] = useState('');
  const [topLimitValue, setTopLimitValue] = useState('');

  const onChangeStartRange = val => {
    setLowLimitValue(val);
  };
  const onChangeFinishRange = val => {
    setTopLimitValue(val);
  };

  return (
    <View>
      <Input
        value={lowLimitValue}
        onChangeText={onChangeStartRange}
        label="цена от"
      />
      <Input
        value={topLimitValue}
        onChangeText={onChangeFinishRange}
        label="цена до"
      />
      <View>
        <Text>
          Цена от {lowLimitValue} ₽ до {topLimitValue} ₽
        </Text>
      </View>
    </View>
  );
}
