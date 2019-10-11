import React from 'react';
import { Image } from 'react-native';
// import MapView from 'react-native-maps';
import { CollapsibleListItem } from '../CollapsibleListItem';

export function SettingsAddress(props) {
  const { coords } = props;

  return (
    <CollapsibleListItem
      style={{
        flex: 1,
        alignItems: 'center',
      }}
      listItemProps={{
        title: coords.join(),
        subtitle: 'Адрес',
      }}
      collapsibleProps={{
        style: {
          paddingBottom: 10,
        },
      }}
      holdTitle={true}
    >
      {/* <MapView style={{ height: 400 }} /> */}
      <Image
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'stretch',
          height: 400,
          width: 300,
          // resizeMode: 'contain',
        }}
        source={require('@toledo/assets/images/map.png')}
      ></Image>
    </CollapsibleListItem>
  );
}
