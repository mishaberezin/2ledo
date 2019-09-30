import React from 'react';
import { Input } from 'react-native-elements';
// import { CollapsibleRow } from '../CollapsibleRow';

export function SettingsTargetPrice(props) {
  const { value, onChange } = props;

  return (
    <Input
      defaultValue={value}
      onChangeText={onChange}
      label="Оптимальная цена"
      keyboardType="number-pad"
    />
  );
}
