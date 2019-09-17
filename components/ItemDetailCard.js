import React from 'react';
import { View, ScrollView, Dimensions, Image } from 'react-native';
import { Text, Avatar, withStyles, Button } from 'react-native-ui-kitten';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DeckCardContainer = ({ title, desc, owner, uri, themedStyle }) => {
  return (
    <ScrollView style={themedStyle.openedCardContainer}>
      <View style={themedStyle.cardContainer}>
        <Image source={{ uri }} style={themedStyle.image} />
        <View>
          <View style={themedStyle.cardShortInfo}>
            <Text category="s1">{title}</Text>
            <View style={themedStyle.cardShortInfoDesc}>
              <Text category="p1">30 + жкх, 2м от метро</Text>
            </View>
            <View style={themedStyle.avatarBlock}>
              {owner && (
                <React.Fragment>
                  <Avatar source={{ uri: owner.avatarUri }} size="small" />
                  <Text style={themedStyle.avatarBlockName} category="s1">
                    {owner.name}
                  </Text>
                </React.Fragment>
              )}
            </View>
          </View>
          <View style={themedStyle.cardDescriptionWrap}>
            <Text category="p1">{desc}</Text>
          </View>
          <View style={themedStyle.cardActions}>
            <Button>Связаться</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default withStyles(DeckCardContainer, () => ({
  cardContainer: {
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  openedCardContainer: { backgroundColor: 'white' },
  image: {
    height: SCREEN_HEIGHT * 0.5,
  },
  cardShortInfo: {
    marginHorizontal: 10,
  },
  cardShortInfoDesc: {
    marginTop: 10,
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
