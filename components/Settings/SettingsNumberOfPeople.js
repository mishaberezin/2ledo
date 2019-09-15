import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export function SettingsNumberOfPeople(props) {
  const { value, onChange } = props;
  const values = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
  ];

  return (
    <View>
      <Text>Number of people: {value}</Text>
      <ButtonGroup
        onPress={index => onChange(values[index].value)}
        selectedIndex={value - 1}
        buttons={values.map(item => item.label)}
        containerStyle={{ height: 50 }}
      />
    </View>
  );
}
