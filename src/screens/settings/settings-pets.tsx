import React from 'react';
import { CollapsibleCheckbox } from '@src/components/collapsible-checkbox';
import { ToledoTextarea } from '@src/components/toledo-textarea';

export function SettingsPets(props) {
  const { checked, description } = props;

  return (
    <CollapsibleCheckbox
      checked={checked}
      listItemProps={{ title: 'Животные' }}
    >
      <ToledoTextarea
        label="Подробнее о животных"
        value={description}
        numberOfLines={2}
      />
    </CollapsibleCheckbox>
  );
}
