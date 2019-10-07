import React from 'react';
import { Input } from 'react-native-elements';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsRentalPrice(props) {
  const { rent, deposit, onChange } = props;

  return (
    <CollapsibleListItem
      listItemProps={{
        title: 'Арендная плата',
      }}
    >
      <Input
        defaultValue={String(rent)}
        onChangeText={onChange}
        label="Рента"
        keyboardType="number-pad"
        underlineColorAndroid="transparent"
        inputContainerStyle={{
          borderBottomWidth: 0,
          paddingLeft: 0,
        }}
      />
      <Input
        defaultValue={String(deposit)}
        onChangeText={onChange}
        label="Депозит"
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
