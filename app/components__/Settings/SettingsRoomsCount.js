import React from 'react';
import { Select } from 'react-native-ui-kitten';

export function SettingsRoomsCount() {
  return (
    <Select
      data={[
        { text: 'Комнату' },
        { text: 'Студию' },
        { text: '1к квартиру' },
        { text: '2к квартиру' },
        { text: '3к квартиру' },
        { text: '4+ квартиру' },
      ]}
      selectedOption={null}
      onSelect={() => {}}
    />
  );
}
