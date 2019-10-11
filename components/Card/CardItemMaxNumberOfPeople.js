import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';

const CardItemMaxNumberOfPeople = ({ value, themedStyle }) => {
  let textValue = null;
  if (!value) {
    return null;
  } else if (value === 1) {
    textValue = 'Сдам одному жильцу';
  } else if (value === 2) {
    textValue = 'Сдам одному или двум жильцам';
  }

  return (
    value && (
      <View style={themedStyle.container}>
        <View style={themedStyle.rooms}>
          <View style={themedStyle.icon}>
            <Ionicons name="ios-people" size={22} color="gray" />
          </View>
          <Text category="s1">{textValue}</Text>
        </View>
      </View>
    )
  );
};

export default withStyles(CardItemMaxNumberOfPeople, () => ({
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
