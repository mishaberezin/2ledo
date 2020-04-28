import React from 'react';
import { CollapsibleCheckbox } from '@app/components/collapsible-checkbox';
import { ToledoTextarea } from '@app/components/toledo-textarea';

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
