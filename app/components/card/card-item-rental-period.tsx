import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';

const CardItemRentalPeriodBare = ({ value, eva: { style } }) => {
  const textValue = {
    long: 'На долгий срок',
    short: 'Быстрая аренда',
  }[value];

  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <View style={style.icon}>
          <Ionicons name="ios-time" size={22} color="gray" />
        </View>
        <Text category="s1">{textValue}</Text>
      </View>
    </View>
  );
};

export const CardItemRentalPeriod = withStyles(
  CardItemRentalPeriodBare,
  () => ({
    container: {
      display: 'flex',
    },
    wrap: {
      flexDirection: 'row',
    },
    icon: {
      marginRight: 4,
    },
  }),
);
