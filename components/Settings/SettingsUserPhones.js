import React from 'react';
import { CollapsibleListItemInput } from '../CollapsibleListItemInput';

export function SettingsUserPhones(props) {
  const { value, onChange } = props;

  const phone = value[0];

  return (
    <CollapsibleListItemInput
      value={phone}
      onChange={value => onChange({ value: [value] })}
      listItemProps={{
        subtitle: 'Телефон',
        title: phone,
      }}
    />
  );
}
