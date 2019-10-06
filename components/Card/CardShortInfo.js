import React from 'react';
import { View } from 'react-native';
import { Text, Avatar, withStyles } from 'react-native-ui-kitten';

const CardShortInfoContainer = ({ owner, themedStyle }) => (
  <View style={themedStyle.cardShortInfo}>
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
);

const CardShortInfo = withStyles(CardShortInfoContainer, () => ({
  cardShortInfo: {
    marginHorizontal: 10,
  },
  cardShortInfoDesc: {
    marginTop: 10,
  },
}));

export default CardShortInfo;
