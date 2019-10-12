import React from 'react';
import { View } from 'react-native';
import { withStyles } from 'react-native-ui-kitten';

import { ToledoHeader4 } from '../ToledoHeader4';
import CardItemLandmark from './CardItemLandmark';
import CardItemNumberOfRooms from './CardItemNumberOfRooms';
import CardItemHostAvatar from './CardItemHostAvatar';

const CardHostShortInfoContainer = ({
  HostUser,
  RentalPrice,
  Landmark,
  NumberOfRooms,
  themedStyle,
}) => {
  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.infoBlock}>
        <ToledoHeader4>{RentalPrice} руб</ToledoHeader4>
        <View style={themedStyle.infoBlockCol}>
          <CardItemNumberOfRooms value={NumberOfRooms} />
          <CardItemLandmark landmark={Landmark} />
        </View>
      </View>
      <View style={themedStyle.avatarBlock}>
        <CardItemHostAvatar uri={HostUser.avatarUri} name={HostUser.name} />
      </View>
    </View>
  );
};

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
  },
}));

export default CardHostShortInfo;
