import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsRentalPeriod(props) {
  const { value, onChange } = props;

  const values = [
    {
      value: 'any',
      label: 'Не важно',
    },
    {
      value: 'long',
      label: 'Больше года',
    },
    {
      value: 'short',
      label: 'Пару месяцев',
    },
  ];

  const selectedIndex = values.findIndex(item => item.value === value);

  return (
    <CollapsibleListItem
      listItemProps={{
        title: values[selectedIndex].label,
        subtitle: 'Срок аренды',
      }}
    >
      <ButtonGroup
        onPress={index => onChange({ value: values[index].value })}
        selectedIndex={selectedIndex}
        buttons={values.map(item => item.value)}
        containerStyle={{ height: 40, marginLeft: 0, marginRight: 0 }}
      />
    </CollapsibleListItem>
  );
}
