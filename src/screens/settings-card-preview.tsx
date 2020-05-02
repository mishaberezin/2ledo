import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { SchemaHostCardPreview } from './settings/schema-host-card-preview';
import { SchemaTenantCardPreview } from './settings/schema-tenant-card-preview';

import { MAIN_BRIGHT } from '@src/constants/colors';

export function SettingsPreview(props) {
  const { type, data: cardData } = useSelector(
    (state) => state.cards[state.localState.currentCardId],
  );
  const { data: userData } = useSelector((state) => state.user);

  let SchemaComponent;
  if (type === 'tenant') {
    SchemaComponent = SchemaTenantCardPreview;
  } else {
    SchemaComponent = SchemaHostCardPreview;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MAIN_BRIGHT,
        paddingTop: 10,
      }}
    >
      {/* <View
        style={{
          flex: 1,
          height: 50,
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: '#FFF',
          zIndex: 20,
          paddingRight: 10,
        }}
      >
        <Button onPress={() => navigation.goBack()} title="dismiss" />
      </View> */}
      <SchemaComponent cardData={cardData} userData={userData} />
    </View>
  );
}
