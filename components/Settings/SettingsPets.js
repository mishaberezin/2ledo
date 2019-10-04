import React from 'react';
import { View } from 'react-native';
import { CollapsibleCheckbox } from '../CollapsibleCheckbox';
import { ToledoTextarea } from '../ToledoTextarea';

export function SettingsPets(props) {
  const { checked, description } = props;

  return (
    <View
      style={{
        opacity: 0.5,
      }}
    >
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
    </View>
  );
}
