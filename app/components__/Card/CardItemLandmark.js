import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';

const CardItemLandmark = ({ landmark, themedStyle }) => {
  return (
    <View style={themedStyle.container}>
      <View key={landmark.id} style={themedStyle.landmark}>
        <View style={themedStyle.icon}>
          <Ionicons name="ios-pin" size={16} color={landmark.data.color} />
        </View>
        <Text category="p2">{landmark.data.name}</Text>
      </View>
    </View>
  );
};

export default withStyles(CardItemLandmark, () => ({
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
