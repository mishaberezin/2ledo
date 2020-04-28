import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import { View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { ToledoHeader5 } from '@app/components/toledo-header-5';
import { SettingsDescription } from './settings-description';
import { SettingsPhotos } from './settings-photos';
import { SettingsRentalPrice } from './settings-rental-price';
import { SettingsNumberOfRooms } from './settings-number-of-rooms';
import { SettingsRentalPeriod } from './settings-rental-period';
import { SettingsAddress } from './settings-address';
import { SettingsFloor } from './settings-floor';
import { SettingsMaxNumberOfPeople } from './settings-max-number-of-people';

const applyData = (Component, data, props) => {
  if (data === undefined || data === null) {
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
        onChange: ({ value }) => {
          onChange({ name: 'NumberOfRooms', value });
        },
      })}
      {applyData(SettingsFloor, Floor, {
        onChange: ({ value }) => onChange({ name: 'Floor', value }),
      })}
      <Divider style={{ height: 158, backgroundColor: 'transparent' }} />
    </ScrollView>
  );
}
