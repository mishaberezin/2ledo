import React from 'react';
import { Select } from 'react-native-ui-kitten';

const options = [
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3' },
  { text: 'Option 4' },
  { text: 'Option 5' },
  { text: 'Option 6' },
  { text: 'Option 8' },
];

function SettingsNumberOfRoomsSelect() {
  const onSelect = () => {};

  return <Select data={options} onSelect={onSelect} />;
}

export default SettingsNumberOfRoomsSelect;
