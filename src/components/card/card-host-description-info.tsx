import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from '@ui-kitten/components';
import { CardItemRentalPeriod } from './card-item-rental-period';
import { CardItemMaxNumberOfPeople } from './card-item-max-number-of-people';

const CardHostDescriptionInfoContainer = ({
  description,
  address,
  rentalPeriod,
  maxNumberOfPeople,
  eva: { style },
}) => (
  <View style={style.container}>
    <View style={[style.block, style.blockWithLine]}>
      <Text category="s1">Адрес:</Text>
      <Text category="p1">{address.postal}</Text>
    </View>
    <View style={style.block}>
      <CardItemRentalPeriod value={rentalPeriod} />
    </View>
    <View style={style.block}>
      <CardItemMaxNumberOfPeople value={maxNumberOfPeople} />
    </View>
    <View style={style.block}>
      <Text category="p1">{description}</Text>
    </View>
  </View>
);

export const CardHostDescriptionInfo = withStyles(
  CardHostDescriptionInfoContainer,
  () => ({
    container: {
      marginTop: 10,
      paddingHorizontal: 5,
    },
    block: {
      marginVertical: 5,
      paddingVertical: 5,
    },
    blockWithLine: {
      borderColor: 'lightgray',
      borderBottomWidth: 1,
    },
  }),
);
