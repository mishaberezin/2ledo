import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

export function SettingsNumberOfRoomsRange(props) {
  const { minimum, onChange } = props;

  return (
    <View>
      <Input
        value={minimum}
        onChangeText={onChange}
        label="Минимально количество комнат"
        keyboardType="number-pad"
      />
    </View>
  );
}
