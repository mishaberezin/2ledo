import React from 'react';
import { View, ScrollView, Dimensions, LayoutAnimation } from 'react-native';
import { Card } from 'react-native-elements';
import { Button, Text, withStyles } from 'react-native-ui-kitten';
import Colors from '../constants/colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const DeckCardContainer = ({
  text,
  title,
  desc,
  uri,
  opened,
  onOpen,
  onClose,
  onLayoutHeight,
  themedStyle,
}) => {
  const onDetailsButtonPress = () => {
    opened ? onClose() : onOpen();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const onLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }) => {
    onLayoutHeight && onLayoutHeight(height);
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }} onLayout={onLayout}>
      <Card
        containerStyle={[themedStyle.cardContainer, themedStyle.shadowStyles]}
        title={text}
        image={{ uri }}
        imageStyle={themedStyle.image}
        resizeMode="cover"
      >
        <View>
          <Text style={themedStyle.cardTitle}>{title}</Text>
          <Button
            style={[themedStyle.cardButton, themedStyle.shadowStyles]}
            onPress={onDetailsButtonPress}
          >
            {opened ? 'Свернуть' : 'Подробнее'}
          </Button>
          {opened && (
            <View style={themedStyle.cardDescriptionWrap}>
              <Text style={themedStyle.cardDescriptionText}>{desc}</Text>
            </View>
          )}
        </View>
      </Card>
    </ScrollView>
  );
};

export default withStyles(DeckCardContainer, () => ({
  cardContainer: {
    marginBottom: 20,
  },
  shadowStyles: {
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    height: SCREEN_HEIGHT * 0.5,
  },
  cardTitle: {
    marginBottom: 20,
  },
  cardDescriptionWrap: {
    marginTop: 20,
  },
  cardDescriptionText: {
    fontSize: 20,
  },
  cardButton: {
    backgroundColor: Colors.darkVioletColor,
    borderColor: Colors.darkVioletColor,
    borderRadius: 20,
    width: SCREEN_WIDTH / 2,
    alignSelf: 'center',
  },
}));
