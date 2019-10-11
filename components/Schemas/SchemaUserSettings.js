import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import { View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { ToledoHeader5 } from '../ToledoHeader5';
import { SettingsUserPhones } from '../Settings/SettingsUserPhones';
import { SettingsUserGender } from '../Settings/SettingsUserGender';
import { SettingsUserBirthYear } from '../Settings/SettingsUserBirthYear';
import { SettingsUserPhotos } from '../Settings/SettingsUserPhotos';

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

export function SchemaUserSettings(props) {
  const { data, onChange } = props;

  const { UserName, UserPhones, UserGender, UserBirthYear, UserPhotos } = data;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <ToledoHeader5>{UserName}</ToledoHeader5>
      </View>
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsUserPhotos, UserPhotos, {
        onChange: ({ value }) => onChange({ name: 'UserPhotos', value }),
      })}

      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsUserPhones, UserPhones, {
        onChange: ({ value }) => onChange({ name: 'UserPhones', value }),
      })}
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsUserGender, UserGender, {
        onChange: ({ value }) => onChange({ name: 'UserGender', value }),
      })}
      <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
      {applyData(SettingsUserBirthYear, UserBirthYear, {
        onChange: ({ value }) => onChange({ name: 'UserBirthYear', value }),
      })}
      <Divider style={{ height: 158, backgroundColor: 'transparent' }} />
    </ScrollView>
  );
}
