import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';

import ToledoButton from '../ToledoButton';
import { CardImages, CardShortInfo } from './index';

const ItemDetailCardContainer = ({ desc, owner, images, themedStyle }) => {
  return (
    <ScrollView
      style={themedStyle.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={themedStyle.cardContainer}>
        <CardImages images={images} />
        <View>
          <CardShortInfo owner={owner} />
          <View style={themedStyle.cardDescriptionWrap}>
            <Text category="p1">{desc}</Text>
          </View>
          <View style={themedStyle.cardActions}>
            <ToledoButton>Связаться</ToledoButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default withStyles(ItemDetailCardContainer, () => ({
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
  avatarBlock: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 30,
  },
  avatarBlockName: {
    marginLeft: 10,
  },
}));
