import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { SettingsCoords } from '../Settings/SettingsCoords';
import { SettingsDescription } from '../Settings/SettingsDescription';
import { SettingsPhotos } from '../Settings/SettingsPhotos';
import { SettingsPrice } from '../Settings/SettingsPrice';
import { SettingsNumberOfRooms } from '../Settings/SettingsNumberOfRooms';
import { SettingsRentalPeriod } from '../Settings/SettingsRentalPeriod';
import { SettingsAddress } from '../Settings/SettingsAddress';
import { SettingsFloor } from '../Settings/SettingsFloor';
import { SettingsNumberOfPeopleRange } from '../Settings/SettingsNumberOfPeopleRange';

export function SchemaHostCardSettings(props) {
  const { data, onChange } = props;
  const {
    Coords,
    Description,
    Photos,
    Price,
    NumberOfRooms,
    RentalPeriod,
    Address,
    Floor,
    NumberOfPeopleRange,
  } = data;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <Text category="h2">Ищу жильца</Text>
      </View>
      {Coords && (
        <SettingsCoords
          {...Coords}
          onChange={value => onChange({ name: 'Coords', value })}
        ></SettingsCoords>
      )}
      {Description && (
        <SettingsDescription
          {...Description}
          onChange={value => onChange({ name: 'Description', value })}
        ></SettingsDescription>
      )}
      {Photos && <SettingsPhotos {...Photos}></SettingsPhotos>}
      {Price && <SettingsPrice {...Price} />}
      {NumberOfRooms && (
        <SettingsNumberOfRooms {...NumberOfRooms}></SettingsNumberOfRooms>
      )}
      {RentalPeriod && (
        <SettingsRentalPeriod
          {...RentalPeriod}
          onChange={() => console.log(123)}
        ></SettingsRentalPeriod>
      )}
      {Address && (
        <SettingsAddress
          {...Address}
          onChange={() => console.log(123)}
        ></SettingsAddress>
      )}
      {Floor && (
        <SettingsFloor
          {...Floor}
          onChange={() => console.log(123)}
        ></SettingsFloor>
      )}
      {NumberOfPeopleRange && (
        <SettingsNumberOfPeopleRange
          {...NumberOfPeopleRange}
          onChange={() => console.log(123)}
        ></SettingsNumberOfPeopleRange>
      )}
    </ScrollView>
  );
}
