import React from 'react';
import { CollapsibleListItemInput } from '../CollapsibleListItemInput';

export function SettingsUserBirthYear(props) {
  const { value, onChange } = props;

  return (
    <CollapsibleListItemInput
      value={value}
      onChange={value => onChange({ value: Number(value) })}
      listItemProps={{
        subtitle: 'Год рождения',
        title: String(value),
      }}
    />
  );
}
