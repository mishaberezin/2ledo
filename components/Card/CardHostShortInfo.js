import React from 'react';
import { View } from 'react-native';
import { Text, Avatar, withStyles } from 'react-native-ui-kitten';

import { ToledoHeader4 } from '../ToledoHeader4';
import CardItemLandmarks from './CardItemLandmarks';
import CardItemNumberOfRooms from './CardItemNumberOfRooms';

const CardHostShortInfoContainer = ({
  HostUser,
  RentalPrice,
  Landmarks,
  NumberOfRooms,
  themedStyle,
}) => (
  <View style={themedStyle.container}>
    <View style={themedStyle.infoBlock}>
      <ToledoHeader4>{RentalPrice} руб</ToledoHeader4>
      <View style={themedStyle.infoBlockCol}>
        <CardItemNumberOfRooms count={NumberOfRooms} />
        <CardItemLandmarks landmarks={Landmarks} />
      </View>
    </View>
    <View style={themedStyle.avatarBlock}>
      <Avatar source={{ uri: HostUser.avatarUri }} size="small" />
      <Text style={themedStyle.avatarBlockName} category="s1">
        {HostUser.name}
      </Text>
    </View>
  </View>
);

const CardHostShortInfo = withStyles(CardHostShortInfoContainer, () => ({
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

export default CardHostShortInfo;
