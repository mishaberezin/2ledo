import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';

const CardItemLandmarkBare = ({ landmark, eva: { style } }) => {
  return (
    <View style={style.container}>
      <View key={landmark.id} style={style.landmark}>
        <View style={style.icon}>
          <Ionicons name="ios-pin" size={16} color={landmark.data.color} />
        </View>
        <Text category="p2">{landmark.data.name}</Text>
      </View>
    </View>
  );
};

export const CardItemLandmark = withStyles(CardItemLandmarkBare, () => ({
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
