import React from 'react';
import { View, Image, Text } from 'react-native';

export function SettingsAddress(props) {
  const { coords } = props;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text>{coords.join()}</Text>
      <Image
        source={require('@toledo/assets/images/host-settings-map.png')}
      ></Image>
    </View>
  );
}
