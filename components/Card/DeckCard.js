import React from 'react';
import {
  View,
  ScrollView,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, withStyles } from 'react-native-ui-kitten';
import { DARK_VIOLET_COLOR } from '@toledo/constants/colors';
import { CardShortInfo, CardImages } from './index';

const DeckCardContainer = ({ card, opened, onOpen, onClose, themedStyle }) => {
  const onDetailsButtonPress = () => {
    opened ? onClose() : onOpen();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.timing);
  };
  const { desc, owner, uri } = card;

  return (
    <ScrollView
      style={themedStyle.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={themedStyle.cardContainer}>
        <CardImages images={[uri]} />
        <View>
          <CardShortInfo owner={owner} />
          <TouchableWithoutFeedback onPress={onDetailsButtonPress}>
            <View
              style={[
                themedStyle.cardButton,
                themedStyle.shadowStyles,
                opened && themedStyle.cardButtonOpened,
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

          {opened && (
            <View style={themedStyle.cardDescriptionWrap}>
              <Text category="p1">{desc}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default withStyles(DeckCardContainer, () => ({
  container: {
    borderColor: '#f0f0ff',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 20,
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
    top: 45,
  },
}));
