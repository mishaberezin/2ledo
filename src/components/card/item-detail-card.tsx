import React from 'react';
import { View, ScrollView } from 'react-native';
import { withStyles } from '@ui-kitten/components';

import { ToledoButton } from '../toledo-button';
import { CardImages } from './card-images';
import { CardHostShortInfo } from './card-host-short-info';
import { CardHostDescriptionInfo } from './card-host-description-info';

const ItemDetailCardContainer = ({ card, eva: { style } }) => {
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <View style={style.cardContainer}>
        <CardImages photos={card.Photos} />
        <View>
          <CardHostShortInfo {...card} />
          <CardHostDescriptionInfo {...card} />
          <View style={style.cardActions}>
            <ToledoButton>Связаться</ToledoButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const ItemDetailCard = withStyles(ItemDetailCardContainer, () => ({
  container: {
    backgroundColor: 'white',
  },
  cardContainer: {
    marginVertical: 25,
    paddingHorizontal: 10,
  },
}));
