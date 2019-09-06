import React, { useState } from 'react';
import { Input } from 'react-native-ui-kitten';

export function SettingsPriceRange() {
  const [value, setValue] = useState('');

  const onChangeText = (...args) => {
    console.log('===========================');
    console.log(args);
    console.log('===========================');
    setValue('hello');
  };

  return <Input value={value} onChangeText={onChangeText} />;
}
