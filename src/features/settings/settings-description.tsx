import React from 'react';
import { View } from 'react-native';
import { DEFAULT_SIDE_MARGIN } from '@src/constants/layout';
import { ToledoTextarea } from '@src/components/toledo-textarea';

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
      <ToledoTextarea
        label="Описание"
        onChange={(value) => {
          onChange({ value });
        }}
        value={value}
      />
    </View>
  );
}