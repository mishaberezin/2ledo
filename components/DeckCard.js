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
import { DARK_VIOLET_COLOR } from '@toledo/constants/colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DeckCardContainer = ({ card, opened, onOpen, onClose, themedStyle }) => {
  const onDetailsButtonPress = () => {
    opened ? onClose() : onOpen();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.timing);
  };
  const { data } = card;
  const users = card.users && Object.values(card.users);

  return (
    <ScrollView
      style={themedStyle.cardContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={themedStyle.card}>
        <Image
          source={{ uri: data.Photos.items[0].ulr }}
          style={themedStyle.image}
        />
        <View>
          <View style={themedStyle.cardShortInfo}>
            <Text category="s1">{data.Name.value}</Text>
            <View style={themedStyle.cardShortInfoDesc}>
              <Text category="p1">{data.Address.value}</Text>
            </View>
            <View style={themedStyle.avatarBlock}>
              {users &&
                users.map(user => (
                  <React.Fragment key={user.id}>
                    <Avatar source={{ uri: user.Avatar.uri }} size="small" />
                    <Text style={themedStyle.avatarBlockName} category="s1">
                      {user.Name.value}
                    </Text>
                  </React.Fragment>
                ))}
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
              <Text category="p1">{data.Description.value}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
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
