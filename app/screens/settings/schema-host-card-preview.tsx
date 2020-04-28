import React from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { DeckHostCard } from '@app/components/card/deck-host-card';

export function SchemaHostCardPreview(props) {
  const { cardData, userData } = props;
  const {
    Address,
    Description,
    Photos,
    RentalPrice,
    NumberOfRooms,
    RentalPeriod,
    Floor,
    MaxNumberOfPeople,
    Landmark,
  } = cardData;

  const card = {
    IsFresh: true,
    HostUser: {
      name: userData.UserName,
      avatarUri: userData.UserAvatar,
    },
    Address,
    Description,
    Photos,
    RentalPrice,
    NumberOfRooms,
    RentalPeriod,
    Floor,
    MaxNumberOfPeople,
    Landmark,
  };

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <DeckHostCard card={card} opened={false} />
      <Divider style={{ height: 100, backgroundColor: 'transparent' }} />
    </ScrollView>
  );
}
