import React from 'react';
import { View, Text, Button } from 'react-native';

export function SettingsLandmarks(props) {
  const { items } = props;

  const handleAddLandmark = () => {};

  return (
    <View>
      <Text>Метро:</Text>
      <View style={{}}>
        {items.map((item, i) => {
          return <Text key={i}>{item.id}</Text>;
        })}
      </View>
      <View style={{}}>
        <Button title="Добавить" onPress={handleAddLandmark} />
      </View>
    </View>
  );
}
