import React from 'react';
import { Input } from 'react-native-elements';
import { CollapsibleRow } from '../CollapsibleRow';

export function SettingsPriceRange(props) {
  const { optimal, onChange } = props;

  return (
    <CollapsibleRow title="Price">
      <Input
        value={optimal}
        onChangeText={onChange}
        label="Оптимальная цена"
        keyboardType="number-pad"
      />
    </CollapsibleRow>
  );
}
