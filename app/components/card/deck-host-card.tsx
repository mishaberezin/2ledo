import React from 'react';
import {
  View,
  ScrollView,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withStyles } from '@ui-kitten/components';

import { DARK_VIOLET_COLOR } from '../../constants/colors';

import { CardHostShortInfo } from './card-host-short-info';
import { CardHostDescriptionInfo } from './card-host-description-info';
import { CardImages } from './card-images';
import { FreshCardIcon } from './fresh-card-icon';

const DeckHostCardContainer = ({
  card,
  opened,
  onOpen,
  onClose,
  cardStyle,
  eva: { style },
}) => {
  const { IsFresh, Photos } = card;

  const onDetailsButtonPress = () => {
    opened ? onClose() : onOpen();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.timing);
  };

  return (
    <ScrollView
      style={[style.container, cardStyle]}
      showsVerticalScrollIndicator={false}
    >
      <View style={style.cardContainer}>
        {IsFresh && (
          <View style={style.freshIconConteiner}>
            <FreshCardIcon />
          </View>
        )}
        <CardImages photos={Photos} />
        <View>
          <CardHostShortInfo {...card} />
          <TouchableWithoutFeedback onPress={onDetailsButtonPress}>
            <View
              style={[
                style.cardButton,
                style.shadowStyles,
                opened && style.cardButtonOpened,
              ]}
            >
              <Ionicons
                name={`ios-arrow-${opened ? 'up' : 'down'}`}
                size={22}
                style={!opened && { position: 'relative', top: 2 }}
                color="#fff"
              />
            </View>
          </TouchableWithoutFeedback>

          {opened && <CardHostDescriptionInfo {...card} />}
        </View>
      </View>
    </ScrollView>
  );
};

export const DeckHostCard = withStyles(DeckHostCardContainer, () => ({
  container: {
    backgroundColor: 'white',
  },
  cardContainer: {
    marginBottom: 30,
    padding: 5,
  },
  shadowStyles: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardButton: {
    backgroundColor: DARK_VIOLET_COLOR,
    borderColor: DARK_VIOLET_COLOR,
    borderRadius: 10,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 70,
  },
  cardButtonOpened: {
    top: 55,
  },
  freshIconConteiner: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 9,
  },
}));
