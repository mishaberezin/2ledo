import React from 'react';
import { View, Text, TextInput } from 'react-native';

export function SettingsDescription(props) {
  const { value, onChange } = props;

  console.log(value);

  return (
    <View>
      <Text>Description:</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}
