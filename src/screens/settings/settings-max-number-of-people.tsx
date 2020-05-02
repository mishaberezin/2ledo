import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleListItem } from '@src/components/collapsible-list-item';

export function SettingsMaxNumberOfPeople(props) {
  const { value, onChange } = props;

  const values = [
    {
      value: 0,
      label: 'Не важно',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
  ];

  const selectedIndex = values.findIndex((item) => item.value === value);
  const currentItem = values[selectedIndex];

  return (
    <CollapsibleListItem
      listItemProps={{
        title: value ? `до ${value}` : currentItem.label,
        subtitle: 'Максимум проживающих',
      }}
    >
      <ButtonGroup
        onPress={(index) => onChange({ value: values[index].value })}
        selectedIndex={selectedIndex}
        buttons={values.map((item) => item.label)}
        containerStyle={{ height: 30 }}
      />
    </CollapsibleListItem>
  );
}
