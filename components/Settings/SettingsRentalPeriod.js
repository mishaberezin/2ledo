import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export function SettingsRentalPeriod(props) {
  const { value, onChange } = props;
  const values = [
    {
      value: 'long',
      label: 'Больше года',
    },
    {
      value: 'short',
      label: 'Несколько месяцев',
    },
  ];

  const selectedIndex = values.findIndex(item => item.value === value);

  return (
    <View>
      <Text>Срок аренды: {value}</Text>
      <ButtonGroup
        onPress={index => onChange(values[index].value)}
        selectedIndex={selectedIndex}
        buttons={values.map(item => item.label)}
        containerStyle={{ height: 50 }}
      />
    </View>
  );
}
