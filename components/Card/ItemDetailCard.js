import React from 'react';
import { View, ScrollView } from 'react-native';
import { withStyles } from 'react-native-ui-kitten';

import ToledoButton from '../ToledoButton';
import { CardImages, CardShortInfo, CardDescriptionInfo } from './index';

const ItemDetailCardContainer = ({ card, themedStyle }) => {
  const { Photos } = card;
  return (
    <ScrollView
      style={themedStyle.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={themedStyle.cardContainer}>
        <CardImages photos={Photos} />
        <View>
          <CardShortInfo {...card} />
          <CardDescriptionInfo {...card} />
          <View style={themedStyle.cardActions}>
            <ToledoButton>Связаться</ToledoButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const ItemDetailCard = withStyles(ItemDetailCardContainer, () => ({
  container: {
    backgroundColor: 'white',
  },
  cardContainer: {
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  cardDescriptionWrap: {
    marginTop: 10,
  },
}));

export default ItemDetailCard;
