import React from 'react';
import { View } from 'react-native';
import { Text, Avatar, withStyles } from 'react-native-ui-kitten';

import { ToledoHeader4 } from '../ToledoHeader4';

const CardShortInfoContainer = ({
  owner,
  price,
  rooms,
  metro,
  themedStyle,
}) => (
  <View style={themedStyle.container}>
    <View style={themedStyle.infoBlock}>
      <ToledoHeader4>{price} руб</ToledoHeader4>
      <View style={themedStyle.infoBlockCol}>
        <Text category="s2">{rooms} комн.</Text>
        <Text category="s2">Метро {metro}</Text>
      </View>
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
  container: {
    marginHorizontal: 10,
  },
  infoBlock: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  infoBlockCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
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

export default CardShortInfo;
