// landmarks
import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';

const CardItemLandmarks = ({ landmarks, themedStyle }) => {
  return (
    <View style={themedStyle.container}>
      {landmarks.map(({ id, type, data }) => {
        if (type === 'metro') {
          return (
            <View key={id} style={themedStyle.landmark}>
              <View style={themedStyle.icon}>
                <Ionicons name="ios-pin" size={16} color={data.color} />
              </View>
              <Text category="p2">{data.name}</Text>
            </View>
          );
        }
      })}
    </View>
  );
};

export default withStyles(CardItemLandmarks, () => ({
  container: {
    display: 'flex',
  },
  landmark: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 4,
  },
}));
