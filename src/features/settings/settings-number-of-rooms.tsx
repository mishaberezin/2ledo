import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleListItem } from '@src/components/collapsible-list-item';

export function SettingsNumberOfRooms(props) {
  const { value, onChange } = props;
  const values = [
    {
      value: 0,
      label: 'студия',
    },
    {
      value: 1,
      label: 'одна',
    },
    {
      value: 2,
      label: 'две',
    },
    {
      value: 3,
      label: 'три',
    },
  ];

  const selectedIndex = values.findIndex((item) => item.value === value);

  return (
    <CollapsibleListItem
      listItemProps={{
        title: values[selectedIndex].label,
        subtitle: 'Количество комнат',
      }}
    >
      <ButtonGroup
        onPress={(index) => {
          onChange({ value: values[index].value });
        }}
        selectedIndex={selectedIndex}
        buttons={values.map((item) => item.value)}
        containerStyle={{ height: 40, marginLeft: 0, marginRight: 0 }}
      />
    </CollapsibleListItem>
  );
}
