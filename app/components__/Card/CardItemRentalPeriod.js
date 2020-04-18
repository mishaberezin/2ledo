import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';

const CardItemRentalPeriod = ({ value, themedStyle }) => {
  const textValue = {
    long: 'На долгий срок',
    short: 'Быстрая аренда',
  }[value];

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.wrap}>
        <View style={themedStyle.icon}>
          <Ionicons name="ios-time" size={22} color="gray" />
        </View>
        <Text category="s1">{textValue}</Text>
      </View>
    </View>
  );
};

export default withStyles(CardItemRentalPeriod, () => ({
  container: {
    display: 'flex',
  },
  wrap: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 4,
  },
}));
