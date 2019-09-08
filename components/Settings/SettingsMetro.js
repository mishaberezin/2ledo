import React from 'react';
import { Select } from 'react-native-ui-kitten';

export function SettingsMetro() {
  return (
    <Select
      data={[
        { text: 'Белорусская' },
        { text: 'Планерная' },
        { text: 'Строгино' },
        { text: 'Таганская' },
        { text: 'Петровско-Разумовская' },
        { text: 'Зябликово' },
      ]}
      selectedOption={null}
      onSelect={() => {}}
    />
  );
}
