import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleListItem } from '@src/components/collapsible-list-item';

export function SettingsUserGender(props) {
  const { value, onChange } = props;

  const values = [
    {
      value: 'male',
      label: 'Мужчина',
    },
    {
      value: 'female',
      label: 'Женщина',
    },
  ];

  const selectedIndex = values.findIndex((item) => item.value === value);

  return (
    <CollapsibleListItem
      listItemProps={{
        title: values[selectedIndex].label,
        subtitle: 'Пол',
      }}
    >
      <ButtonGroup
        onPress={(index) => onChange({ value: values[index].value })}
        selectedIndex={selectedIndex}
        buttons={values.map((item) => item.value)}
        containerStyle={{ height: 40, marginLeft: 0, marginRight: 0 }}
      />
    </CollapsibleListItem>
  );
}
