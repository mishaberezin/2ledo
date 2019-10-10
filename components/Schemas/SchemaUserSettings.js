import React from 'react';
// import isPlainObject from 'lodash/isPlainObject';
import { View, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { ToledoHeader5 } from '../ToledoHeader5';
// import { SettingsUserName } from '../Settings/SettingsUserName';
// import { SettingsUserPhones } from '../Settings/SettingsUserPhones';
// import { SettingsUserGender } from '../Settings/SettingsUserGender';
// import { SettingsUserBirthYear } from '../Settings/SettingsUserBirthYear';
// import { SettingsUserPhotos } from '../Settings/SettingsUserPhotos';
// import { SettingsUserLinks } from '../Settings/SettingsUserLinks';

// import { CollapsibleHeader } from '../CollapsibleHeader';
// import { DEFAULT_SIDE_MARGIN } from '@toledo/constants/layout';

// const applyData = (Component, data, props) => {
//   if (!data) {
//     return null;
//   }

//   const value = data.value || data;
//   const dataProps = isPlainObject(value) ? value : { value };
//   const allProps = {
//     ...dataProps,
//     ...props,
//   };

//   return <Component {...allProps} />;
// };

export function SchemaUserSettings(props) {
  const { data } = props;

  const {
    UserName,
    // UserPhones,
    // UserGender,
    // UserBirthYear,
    // UserPhotos,
    // UserLinks,
  } = data;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <ToledoHeader5>{UserName}</ToledoHeader5>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../../assets/images/portret.png')}
          style={{ flex: 1, height: 500 }}
        />
      </View>
      {/* {UserName && (
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
      )} */}
      <Divider style={{ height: 158, backgroundColor: 'transparent' }} />
    </ScrollView>
  );
}
