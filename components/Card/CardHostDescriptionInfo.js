import React from 'react';
import { View } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';
import CardItemRentalPeriod from './CardItemRentalPeriod';
import CardItemMaxNumberOfPeople from './CardItemMaxNumberOfPeople';

const CardHostDescriptionInfoContainer = ({
  Description,
  Address,
  RentalPeriod,
  MaxNumberOfPeople,
  themedStyle,
}) => (
  <View style={themedStyle.container}>
    <View style={[themedStyle.block, themedStyle.blockWithLine]}>
      <Text category="s1">Адрес:</Text>
      <Text category="p1">{Address.postal}</Text>
    </View>
    <View style={themedStyle.block}>
      <CardItemRentalPeriod value={RentalPeriod} />
    </View>
    <View style={themedStyle.block}>
      <CardItemMaxNumberOfPeople value={MaxNumberOfPeople} />
    </View>
    <View style={themedStyle.block}>
      <Text category="p1">{Description}</Text>
    </View>
  </View>
);

const CardHostDescriptionInfo = withStyles(
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
  })
);

export default CardHostDescriptionInfo;
