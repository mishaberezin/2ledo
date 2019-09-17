import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { SettingsNumberOfPeople } from '../Settings/SettingsNumberOfPeople';
import { SettingsDescription } from '../Settings/SettingsDescription';
import { SettingsPhotos } from '../Settings/SettingsPhotos';
import { SettingsPriceRange } from '../Settings/SettingsPriceRange';
import { SettingsNumberOfRoomsRange } from '../Settings/SettingsNumberOfRoomsRange';
import { SettingsRentalPeriod } from '../Settings/SettingsRentalPeriod';
import { SettingsLandmarks } from '../Settings/SettingsLandmarks';

export function SchemaTenantCardSettings(props) {
  const { data, onChange } = props;
  const {
    NumberOfPeople,
    Description,
    Photos,
    PriceRange,
    NumberOfRoomsRange,
    RentalPeriod,
    Landmarks,
  } = data;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <Text category="h2">Ищу квартиру</Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <Image
          source={require('../../assets/images/card-tenant.png')}
          style={{ width: 250, height: 300 }}
        />
      </View>
      {NumberOfRoomsRange && (
        <SettingsNumberOfRoomsRange
          {...NumberOfRoomsRange}
        ></SettingsNumberOfRoomsRange>
      )}
      {NumberOfPeople && (
        <SettingsNumberOfPeople
          {...NumberOfPeople}
          onChange={value => onChange({ name: 'NumberOfPeople', value })}
        ></SettingsNumberOfPeople>
      )}
      {Description && (
        <SettingsDescription
          {...Description}
          onChange={value => onChange({ name: 'Description', value })}
        ></SettingsDescription>
      )}
      {Photos && <SettingsPhotos {...Photos}></SettingsPhotos>}
      {PriceRange && <SettingsPriceRange {...PriceRange} />}
      {RentalPeriod && (
        <SettingsRentalPeriod
          {...RentalPeriod}
          onChange={() => console.log(123)}
        ></SettingsRentalPeriod>
      )}
      {Landmarks && (
        <SettingsLandmarks
          {...Landmarks}
          onChange={() => console.log(123)}
        ></SettingsLandmarks>
      )}
    </ScrollView>
  );
}
