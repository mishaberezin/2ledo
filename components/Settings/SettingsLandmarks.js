import React from 'react';
// import { View, Text, Button } from 'react-native';
import { View, Text } from 'react-native';
import { DEFAULT_SIDE_MARGIN } from '@toledo/constants/layout';

export function SettingsLandmarks(props) {
  const { value } = props;

  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: DEFAULT_SIDE_MARGIN,
        paddingRight: DEFAULT_SIDE_MARGIN,
      }}
    >
      <View style={{}}>
        {value.map((item, i) => {
          return (
            <Text style={{ color: item.color, fontWeight: 'bold' }} key={i}>
              {item.name}
            </Text>
          );
        })}
      </View>
      {/* <View style={{}}>
        <Button title="Добавить" onPress={handleAddLandmark} />
      </View> */}
    </View>
  );
}
