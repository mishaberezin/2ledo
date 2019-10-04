import React from 'react';
import { View } from 'react-native';
import { DEFAULT_SIDE_MARGIN } from '@toledo/constants/layout';
import { ToledoTextarea } from '../ToledoTextarea';

export function SettingsDescription(props) {
  const { value, onChange } = props;

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        paddingLeft: DEFAULT_SIDE_MARGIN,
        paddingRight: DEFAULT_SIDE_MARGIN,
        paddingTop: 18,
        paddingBottom: 18,
      }}
    >
      <ToledoTextarea label="Описание" onChange={onChange} value={value} />
    </View>
  );
}
