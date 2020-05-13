import React from 'react';
import { View } from 'react-native';
import { useStyleSheet, StyleService } from '@ui-kitten/components';

import { ToledoHeader4 } from '../toledo-header-4';
import { CardItemLandmark } from './card-item-landmark';
import { CardItemNumberOfRooms } from './card-item-number-of-rooms';
import { CardItemHostAvatar } from './card-item-host-avatar';

export const CardHostShortInfo = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { rentalPrice, roomsCount } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <ToledoHeader4>{rentalPrice} руб</ToledoHeader4>
        <View style={styles.infoBlockCol}>
          <CardItemNumberOfRooms value={roomsCount} />
          {/* <CardItemLandmark landmark={Landmark} /> */}
        </View>
      </View>
      {/* <View style={styles.avatarBlock}>
        <CardItemHostAvatar uri={HostUser.avatarUri} name={HostUser.name} />
      </View> */}
    </View>
  );
};

const themedStyles = StyleService.create({
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
});
