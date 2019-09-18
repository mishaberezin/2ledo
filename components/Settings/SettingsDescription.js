import React from 'react';
import { TextInput } from 'react-native';
import { CollapsibleRow } from '../CollapsibleRow';

export function SettingsDescription(props) {
  const { value, onChange } = props;

  return (
    <CollapsibleRow title="Описание">
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={onChange}
        value={value}
      />
    </CollapsibleRow>
  );
}
