import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import { View, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { ToledoHeader5 } from '../ToledoHeader5';
import { SettingsDescription } from '../Settings/SettingsDescription';
import { SettingsPhotos } from '../Settings/SettingsPhotos';
import { SettingsRentalPrice } from '../Settings/SettingsRentalPrice';
import { SettingsNumberOfRooms } from '../Settings/SettingsNumberOfRooms';
import { SettingsRentalPeriod } from '../Settings/SettingsRentalPeriod';
import { SettingsAddress } from '../Settings/SettingsAddress';
import { SettingsFloor } from '../Settings/SettingsFloor';
import { SettingsTextLabel } from '../Settings/SettingsTextLabel';
import { SettingsMaxNumberOfPeople } from '../Settings/SettingsMaxNumberOfPeople';
import { DEFAULT_SIDE_MARGIN } from '@toledo/constants/layout';

const applyData = (Component, data, props) => {
  if (!data) {
    return null;
  }

  const value = data.value || data;
  const dataProps = isPlainObject(value) ? value : { value };
  const allProps = {
    ...dataProps,
    ...props,
  };

  return <Component {...allProps} />;
};

export function SchemaHostCardSettings(props) {
  const { data, onChange } = props;
  const {
    Address,
    Description,
    Photos,
    RentalPrice,
    NumberOfRooms,
    RentalPeriod,
    Floor,
    MaxNumberOfPeople,
  } = data;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <ToledoHeader5>Ищу жильца</ToledoHeader5>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingLeft: DEFAULT_SIDE_MARGIN,
          paddingRight: DEFAULT_SIDE_MARGIN,
        }}
      >
        <Image
          source={require('../../assets/images/card-host.png')}
          style={{ flex: 1, height: 400 }}
        />
      </View>
      <SettingsTextLabel label="Будем искать по этим параметрам" />

      {applyData(SettingsRentalPrice, RentalPrice, {
        onChange: ({ value }) => onChange({ name: 'RentalPrice', value }),
      })}
      {applyData(SettingsAddress, Address)}
      {applyData(SettingsMaxNumberOfPeople, MaxNumberOfPeople, {
        onChange: ({ value }) => onChange({ name: 'MaxNumberOfPeople', value }),
      })}

      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsPhotos, Photos, {
        onChange: ({ value }) => onChange({ name: 'Photos', value }),
      })}
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsDescription, Description, {
        onChange: ({ value }) => onChange({ name: 'Description', value }),
      })}
      {applyData(SettingsRentalPeriod, RentalPeriod, {
        onChange: ({ value }) => onChange({ name: 'RentalPeriod', value }),
      })}
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsNumberOfRooms, NumberOfRooms, {
        onChange: ({ value }) => onChange({ name: 'NumberOfRooms', value }),
      })}
      {applyData(SettingsFloor, Floor, {
        onChange: ({ value }) => onChange({ name: 'Floor', value }),
      })}

      <Divider style={{ height: 158, backgroundColor: 'transparent' }} />
    </ScrollView>
  );
}
