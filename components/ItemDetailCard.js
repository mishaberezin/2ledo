import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import { Text, Avatar, withStyles } from 'react-native-ui-kitten';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DeckCardContainer = ({ title, desc, owner, uri, themedStyle }) => {
  return (
    <ScrollView style={themedStyle.openedCardContainer}>
      <Card
        containerStyle={[themedStyle.cardContainer, themedStyle.shadowStyles]}
        image={{ uri }}
        imageStyle={themedStyle.image}
        resizeMode="cover"
      >
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
        </View>
      </Card>
    </ScrollView>
  );
};

export default withStyles(DeckCardContainer, () => ({
  cardContainer: {
    marginBottom: 25,
  },
  openedCardContainer: { backgroundColor: 'white' },
  shadowStyles: {
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
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
