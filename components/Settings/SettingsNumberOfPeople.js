import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsNumberOfPeople(props) {
  const { value, onChange } = props;

  const values = [
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

  return (
    <CollapsibleListItem
      listItemProps={{
        title: `до ${value}`,
        subtitle: 'Количество проживающих',
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
