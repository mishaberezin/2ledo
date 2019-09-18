import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { SettingsUserName } from '../Settings/SettingsUserName';
import { SettingsUserPhones } from '../Settings/SettingsUserPhones';
import { SettingsUserGender } from '../Settings/SettingsUserGender';
import { SettingsUserBirthYear } from '../Settings/SettingsUserBirthYear';
import { SettingsUserPhotos } from '../Settings/SettingsUserPhotos';
import { SettingsUserLinks } from '../Settings/SettingsUserLinks';

export function SchemaUserSettings(props) {
  const { data, onChange } = props;

  const {
    UserName,
    UserPhones,
    UserGender,
    UserBirthYear,
    UserPhotos,
    UserLinks,
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
      {UserName && (
        <SettingsUserName
          {...UserName}
          onChange={value => onChange({ name: 'UserName', value })}
        ></SettingsUserName>
      )}
      {UserPhones && (
        <SettingsUserPhones
          {...UserPhones}
          onChange={value => onChange({ name: 'UserPhones', value })}
        ></SettingsUserPhones>
      )}
      {UserGender && <SettingsUserGender {...UserGender}></SettingsUserGender>}
      {UserBirthYear && <SettingsUserBirthYear {...UserBirthYear} />}
      {UserPhotos && <SettingsUserPhotos {...UserPhotos}></SettingsUserPhotos>}
      {UserLinks && (
        <SettingsUserLinks
          {...UserLinks}
          onChange={() => console.log(123)}
        ></SettingsUserLinks>
      )}
    </ScrollView>
  );
}
