import React from 'react';
import { View } from 'react-native';
import { withStyles } from '@ui-kitten/components';

import { ToledoHeader4 } from '../toledo-header-4';
import { CardItemLandmark } from './card-item-landmark';
import { CardItemNumberOfRooms } from './card-item-number-of-rooms';
import { CardItemHostAvatar } from './card-item-host-avatar';

const CardHostShortInfoContainer = ({
  HostUser,
  RentalPrice,
  Landmark,
  NumberOfRooms,
  eva: { style },
}) => {
  return (
    <View style={style.container}>
      <View style={style.infoBlock}>
        <ToledoHeader4>{RentalPrice} руб</ToledoHeader4>
        <View style={style.infoBlockCol}>
          <CardItemNumberOfRooms value={NumberOfRooms} />
          <CardItemLandmark landmark={Landmark} />
        </View>
      </View>
      <View style={style.avatarBlock}>
        <CardItemHostAvatar uri={HostUser.avatarUri} name={HostUser.name} />
      </View>
    </View>
  );
};

export const CardHostShortInfo = withStyles(CardHostShortInfoContainer, () => ({
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
