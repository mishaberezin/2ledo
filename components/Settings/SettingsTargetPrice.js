import React from 'react';
import { Input } from 'react-native-elements';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsTargetPrice(props) {
  const { value, onChange } = props;

  return (
    <CollapsibleListItem
      listItemProps={{
        title: 'Оптимальная цена',
      }}
    >
      <Input
        defaultValue={String(value)}
        onChangeText={onChange}
        placeholder="₽₽₽"
        keyboardType="number-pad"
        underlineColorAndroid="transparent"
        inputContainerStyle={{
          borderBottomWidth: 0,
          paddingLeft: 0,
        }}
      />
    </CollapsibleListItem>
  );
}
