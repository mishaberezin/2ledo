import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsMaxNumberOfPeople(props) {
  const { value, onChange } = props;

  const values = [
    {
      value: 1,
      label: 'Не важно',
    },
    {
      value: 2,
      label: '1',
    },
    {
      value: 3,
      label: '2',
    },
    {
      value: 4,
      label: '3',
    },
  ];

  return (
    <CollapsibleListItem
      listItemProps={{
        title: `до ${value}`,
        subtitle: 'Максимум проживающих',
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
