import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';

const CardItemNumberOfRooms = ({ value, themedStyle }) => {
  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.rooms}>
        <View style={themedStyle.icon}>
          <Ionicons name="ios-cube" size={16} color="gray" />
        </View>
        <Text category="p2">{value} комн.</Text>
      </View>
    </View>
  );
};

export default withStyles(CardItemNumberOfRooms, () => ({
  container: {
    display: 'flex',
  },
  rooms: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 4,
  },
}));
