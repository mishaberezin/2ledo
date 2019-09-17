import React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Avatar, withStyles } from 'react-native-ui-kitten';
import Colors from '../constants/colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DeckCardContainer = ({
  title,
  desc,
  owner,
  uri,
  opened,
  onOpen,
  onClose,
  themedStyle,
}) => {
  const onDetailsButtonPress = () => {
    opened ? onClose() : onOpen();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.timing);
  };

  const card = (
    <View style={themedStyle.card}>
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
  );

  return <ScrollView style={themedStyle.cardContainer}>{card}</ScrollView>;
};

export default withStyles(DeckCardContainer, () => ({
  cardContainer: {
    borderColor: '#f0f0ff',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 20,
  },
  card: {
    marginBottom: 30,
    padding: 5,
  },
  shadowStyles: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
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
  cardButton: {
    backgroundColor: Colors.darkVioletColor,
    borderColor: Colors.darkVioletColor,
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
