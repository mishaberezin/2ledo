import React from 'react';
import { Input } from 'react-native-elements';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsTargetPrice(props) {
  const { value, onChange } = props;

  return (
    <CollapsibleListItem>
      <Input
        defaultValue={String(value)}
        onChangeText={onChange}
        label="Оптимальная цена"
        keyboardType="number-pad"
      />
    </CollapsibleListItem>
  );
}
