import React from 'react';
import { View } from 'react-native';
import { CollapsibleCheckbox } from '../CollapsibleCheckbox';
import { ToledoTextarea } from '../ToledoTextarea';

export function SettingsChildren(props) {
  const { checked, description } = props;

  return (
    <View
      style={{
        opacity: 0.5,
      }}
    >
      <CollapsibleCheckbox checked={checked} listItemProps={{ title: 'Дети' }}>
        <ToledoTextarea
          label="Подробнее о детях"
          value={description}
          numberOfLines={2}
        />
      </CollapsibleCheckbox>
    </View>
  );
}
