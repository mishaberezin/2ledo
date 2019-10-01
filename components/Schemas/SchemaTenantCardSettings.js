// import React, { useState } from 'react';
import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import { View, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
// import { Text } from 'react-native-ui-kitten';
import { ToledoHeader5 } from '../ToledoHeader5';
import { SettingsTextLabel } from '../Settings/SettingsTextLabel';
// import { SettingsNumberOfPeople } from '../Settings/SettingsNumberOfPeople';
// import { SettingsDescription } from '../Settings/SettingsDescription';
import { SettingsPhotos } from '../Settings/SettingsPhotos';
import { SettingsTargetPrice } from '../Settings/SettingsTargetPrice';
// import { SettingsNumberOfRoomsRange } from '../Settings/SettingsNumberOfRoomsRange';
// import { SettingsRentalPeriod } from '../Settings/SettingsRentalPeriod';
import { SettingsLandmarks } from '../Settings/SettingsLandmarks';
import { SettingsCheckbox } from '../Settings/SettingsCheckbox';

// import { CollapsibleRow } from '../CollapsibleRow';

import grid from '../../constants/grid';

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

export function SchemaTenantCardSettings(props) {
  // const { data, onChange } = props;
  const { data } = props;
  const {
    // NumberOfPeople,
    TargetPrice,
    // Description,
    Photos,
    // NumberOfRoomsRange,
    // RentalPeriod,
    Landmarks,
  } = data;
  const { defaultSideMargin } = grid;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <ToledoHeader5>Ищу квартиру</ToledoHeader5>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingLeft: defaultSideMargin,
          paddingRight: defaultSideMargin,
        }}
      >
        <Image
          source={require('../../assets/images/card-tenant.png')}
          style={{ flex: 1, height: 400, ImageResizeMode: 'cover' }}
        />
      </View>
      <SettingsTextLabel label="Будем искать по этим параметрам" />
      {applyData(SettingsTargetPrice, TargetPrice)}
      <SettingsCheckbox checked={true} label="Первый этаж не нужно" />
      <SettingsTextLabel label="Район, округ и метро. Укажите все" />
      {applyData(SettingsLandmarks, Landmarks, {
        onChange: () => console.log(123),
      })}
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />

      {applyData(SettingsPhotos, Photos)}
      {/* {NumberOfRoomsRange && (
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
      {PriceRange && <SettingsTargetPrice {...PriceRange} />}
      {Description && (
        <SettingsDescription
          {...Description}
          onChange={value => onChange({ name: 'Description', value })}
        ></SettingsDescription>
      )}
      <CollapsibleRow title="Остальное">
        {RentalPeriod && (
          <SettingsRentalPeriod
            {...RentalPeriod}
            onChange={() => console.log(123)}
          ></SettingsRentalPeriod>
        )}

      </CollapsibleRow> */}
    </ScrollView>
  );
}
