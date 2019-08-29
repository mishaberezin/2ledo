import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-ui-kitten';

function SettingsHeader(props) {
  const { onTunePress, onDataPress, onUserPress } = props;

  return (
    <View
      style={{
        height: 170,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
      }}
    >
      <View
        style={{
          marginLeft: 32,
        }}
      >
        <Text category="h1">Настройки</Text>
      </View>
      <View
        style={{
          height: 50,
          paddingLeft: 32,
          flexDirection: 'row',
        }}
      >
        <Button appearance="ghost" onPress={onTunePress}>
          Ищу
        </Button>
        <Button appearance="ghost" onPress={onDataPress}>
          Предлагаю
        </Button>
        <Button appearance="ghost" onPress={onUserPress}>
          О себе
        </Button>
      </View>
    </View>
  );
}

export default SettingsHeader;
