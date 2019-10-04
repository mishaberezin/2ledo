import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsRentalPeriod(props) {
  const { value, onChange } = props;

  const values = [
    {
      value: 'long',
      label: 'Больше года',
    },
    {
      value: 'short',
      label: 'Несколько месяцев',
    },
  ];

  return (
    <CollapsibleListItem
      listItemProps={{
        title: value,
        subtitle: 'Срок аренды',
      }}
    >
      <ButtonGroup
        onPress={index => onChange(values[index].value)}
        selectedIndex={value - 1}
        buttons={values.map(item => item.label)}
        containerStyle={{ height: 30 }}
      />
    </CollapsibleListItem>
  );
}
