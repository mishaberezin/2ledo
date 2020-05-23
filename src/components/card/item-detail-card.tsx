import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';

import { ToledoButton } from '../toledo-button';
import { GridCardImages } from './grid-card-images';
import { CardImages } from './card-images';
import { CardHostShortInfo } from './card-host-short-info';
import { CardHostDescriptionInfo } from './card-host-description-info';

const ItemDetailCardContainer = ({ card, eva: { style } }) => {
  const {
    rentalPrice,
    roomsCount,
    description,
    address,
    rentalPeriod,
    maxNumberOfPeople,
  } = card.apartment.data;
  console.log(card.apartment.data);
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <View style={style.cardContainer}>

        <GridCardImages photos={card.apartment.data.photos} />

        <View style={style.textBlock}>
          <Text style={style.textBlockTitle} category='s1'>Название</Text>
          <Text style={style.textBlockText} category='p1'>{address.postal}</Text>
        </View>
        <View style={style.textBlock}>
          <Text style={style.textBlockTitle} category='s1'>Описание</Text>
          <Text style={style.textBlockText} category='p1'>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );

  // return (
  //   <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
  //     <View style={style.cardContainer}>
  //       <CardImages photos={card.apartment.data.photos} />
  //       <View>
  //         <CardHostShortInfo
  //           rentalPrice={rentalPrice}
  //           roomsCount={roomsCount} />
  //         <CardHostDescriptionInfo
  //           description={description}
  //           address={address}
  //           rentalPeriod={rentalPeriod}
  //           maxNumberOfPeople={maxNumberOfPeople} />
  //         <View style={style.cardActions}>
  //           <ToledoButton>Связаться</ToledoButton>
  //         </View>
  //       </View>
  //     </View>
  //   </ScrollView>
  // );
};

export const ItemDetailCard = withStyles(ItemDetailCardContainer, () => ({
  container: {
    backgroundColor: 'white',
  },
  cardContainer: {

  },
  textBlock: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(120, 121, 147, 0.1)',
  },
  textBlockTitle: {
    color: '#787993',
    marginBottom: 4,
  },
  textBlockText: {
    color: '#25265E',
  }
}));
