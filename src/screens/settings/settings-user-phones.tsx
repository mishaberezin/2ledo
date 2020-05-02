import React from 'react';
import { CollapsibleListItemInput } from '@src/components/collapsible-list-item-input';

export function SettingsUserPhones(props) {
  const { value, onChange } = props;

  const phone = value[0];

  return (
    <CollapsibleListItemInput
      value={phone}
      onChange={(value) => onChange({ value: [value] })}
      listItemProps={{
        subtitle: 'Телефон',
        title: phone,
      }}
    />
  );
}
