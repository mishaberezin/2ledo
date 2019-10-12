import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import DeckHostCard from '@toledo/components/Card/DeckHostCard';

export function SchemaTenantCardPreview(props) {
  const { cardData } = props;
  // const {
  //   Address,
  //   Description,
  //   Photos,
  //   RentalPrice,
  //   NumberOfRooms,
  //   RentalPeriod,
  //   Floor,
  //   MaxNumberOfPeople,
  // } = cardData;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <DeckHostCard card={cardData} opened={false} />
      <Divider style={{ height: 100, backgroundColor: 'transparent' }} />
    </View>
  );
}
