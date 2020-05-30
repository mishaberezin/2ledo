import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@ui-kitten/components';

import { GridCardImages } from './grid-card-images';
import { CollapsibleRow } from '../collapsible-row';
// import { CardImages } from './card-images';
// import { CardHostShortInfo } from './card-host-short-info';
// import { CardHostDescriptionInfo } from './card-host-description-info';

class ItemDetailCardContainer extends Component {

  constructor(props) {
    super(props);
    this.scroll = null;
  }

  render() {
    const { card, eva: { style } } = this.props;
    const {
      rentalPrice,
      roomsCount,
      description,
      address,
      rentalPeriod,
      maxNumberOfPeople,
    } = card.apartment.data;

    const onCollapsibleOpenClose = (opened, blockY) => {
      // небольшой хак с срокллом блока при открытии списка.
      if (opened) {
        this.scroll.scrollTo({ y: blockY + 20, animated: true });
      }
    };

    return (
      <ScrollView
        ref={ref => this.scroll = ref}
        style={style.container}
        showsVerticalScrollIndicator={false}
      >
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

          <CollapsibleRow title='Аренда' rowHeight={60} onOpenClose={onCollapsibleOpenClose}>
            <View style={style.textBlock}>
              <Text style={style.textBlockTitle} category='s1'>Квартира</Text>
            </View>
            <View style={style.textBlock}>
              <Text style={style.textBlockTitle} category='s1'>От 1 года и надолго</Text>
            </View>
            <View style={style.textBlock}>
              <Text style={style.textBlockTitle} category='s1'>1 комната</Text>
            </View>
            <View style={style.textBlock}>
              <Text style={style.textBlockTitle} category='s1'>От 35 000 ₽</Text>
            </View>
          </CollapsibleRow>

        </View>
      </ScrollView>
    );
  }

};

export const ItemDetailCard = withStyles(ItemDetailCardContainer, () => ({
  container: {
    backgroundColor: 'white',
  },
  cardContainer: {
    // TODO: поправить отступ, придумать что-то
    paddingBottom: 100,
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
    lineHeight: 18,
  },
  textBlockGroup: {
    backgroundColor: '#fafaff',
    flexDirection: 'row',
  },
  textBlockGroupName: {
    width: '90%',
  },
  textBlockGroupNameText: {
    fontSize: 22,
  },
  textBlockGroupOpenIcon: {
    width: '10%',
    top: 5,
  }
}));
