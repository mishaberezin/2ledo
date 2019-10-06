import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import { View, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { ToledoHeader5 } from '../ToledoHeader5';
import { SettingsTextLabel } from '../Settings/SettingsTextLabel';
import { SettingsNumberOfPeople } from '../Settings/SettingsNumberOfPeople';
import { SettingsDescription } from '../Settings/SettingsDescription';
import { SettingsPhotos } from '../Settings/SettingsPhotos';
import { SettingsTargetPrice } from '../Settings/SettingsTargetPrice';
import { SettingsRentalPeriod } from '../Settings/SettingsRentalPeriod';
import { SettingsChildren } from '../Settings/SettingsChildren';
import { SettingsPets } from '../Settings/SettingsPets';
import { SettingsLandmarks } from '../Settings/SettingsLandmarks';
import { SettingsCheckbox } from '../Settings/SettingsCheckbox';

import { CollapsibleHeader } from '../CollapsibleHeader';

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

export function SchemaTenantCardSettings(props) {
  const { data } = props;
  const {
    NumberOfPeople,
    TargetPrice,
    Description,
    Photos,
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
        <ToledoHeader5>Ищу квартиру</ToledoHeader5>
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
          source={require('../../assets/images/card-tenant.png')}
          style={{ flex: 1, height: 400 }}
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

      {applyData(SettingsNumberOfPeople, NumberOfPeople)}
      {applyData(SettingsPhotos, Photos)}
      {applyData(SettingsDescription, Description)}

      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />

      {applyData(SettingsRentalPeriod, RentalPeriod)}

      {/* Времянка */}
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsChildren, {
        checked: true,
        description: 'Младшему 35, готовится покинуть гнёздышко.',
      })}
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsPets, {
        checked: true,
        description: 'Щенок сенбернар, совсем крошка.',
      })}

      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      <View
        style={{
          opacity: 0.5,
        }}
      >
        <CollapsibleHeader title="Уровни доверия" checked={true}>
          <SettingsCheckbox label="Соцсети"></SettingsCheckbox>
          <SettingsCheckbox label="ЕГРН" checked={true}></SettingsCheckbox>
          <SettingsCheckbox label="Паспорт"></SettingsCheckbox>
        </CollapsibleHeader>
      </View>

      <Divider style={{ height: 158, backgroundColor: 'transparent' }} />
    </ScrollView>
  );
}
