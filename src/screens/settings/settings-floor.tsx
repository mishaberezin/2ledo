import React from 'react';
import { CollapsibleListItemInput } from '@src/components/collapsible-list-item-input';

export function SettingsFloor(props) {
  const { value, onChange } = props;

  return (
    <CollapsibleListItemInput
      value={value}
      inputProps={{
        onEndEditing: (e) => {
          onChange({ value: Number(e.nativeEvent.text) });
        },
      }}
      listItemProps={{
        subtitle: 'Этаж',
        title: String(value),
      }}
    />
  );
}
