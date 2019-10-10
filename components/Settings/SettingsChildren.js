import React from 'react';
import { CollapsibleCheckbox } from '../CollapsibleCheckbox';
import { ToledoTextarea } from '../ToledoTextarea';

export function SettingsChildren(props) {
  const { checked, description } = props;

  return (
    <CollapsibleCheckbox checked={checked} listItemProps={{ title: 'Дети' }}>
      <ToledoTextarea
        label="Подробнее о детях"
        value={description}
        numberOfLines={2}
      />
    </CollapsibleCheckbox>
  );
}
