import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { CollapsibleRow } from '../CollapsibleRow';

export function SettingsMinNumberOfRooms(props) {
  const { minimum, onChange } = props;
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
    <CollapsibleRow title="Минимальное количество комнат">
      <ButtonGroup
        onPress={index => onChange(values[index].value)}
        selectedIndex={minimum - 1}
        buttons={values.map(item => item.label)}
        containerStyle={{ height: 30 }}
      />
    </CollapsibleRow>
  );
}
