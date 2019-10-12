import React from 'react';
import { View, ScrollView } from 'react-native';
import { withStyles } from 'react-native-ui-kitten';

import ToledoButton from '../ToledoButton';
import CardImages from './CardImages';
import CardHostShortInfo from './CardHostShortInfo';
import CardHostDescriptionInfo from './CardHostDescriptionInfo';

const ItemDetailCardContainer = ({ card, themedStyle }) => {
  return (
    <ScrollView
      style={themedStyle.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={themedStyle.cardContainer}>
        <CardImages photos={card.Photos} />
        <View>
          <CardHostShortInfo {...card} />
          <CardHostDescriptionInfo {...card} />
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
    marginVertical: 25,
    paddingHorizontal: 10,
  },
}));

export default ItemDetailCard;
