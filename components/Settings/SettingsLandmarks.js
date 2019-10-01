import React from 'react';
// import { View, Text, Button } from 'react-native';
import { View, Text } from 'react-native';
import grid from '../../constants/grid';

export function SettingsLandmarks(props) {
  const { value } = props;
  const { defaultSideMargin } = grid;

  // const handleAddLandmark = () => {};

  console.log(props);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: defaultSideMargin,
        paddingRight: defaultSideMargin,
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
