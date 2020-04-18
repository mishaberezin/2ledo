import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { MAIN_BRIGHT } from '@toledo/constants/colors';

import { SchemaHostCardPreview } from '../components/Schemas/SchemaHostCardPreview';
import { SchemaTenantCardPreview } from '../components/Schemas/SchemaTenantCardPreview';

function SettingsCardPreviewScreenUnconnected(props) {
  const { card, user } = props;
  const { type, data: cardData } = card;
  const { data: userData } = user;

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

const mapStateToProps = state => {
  const { localState } = state;

  return {
    user: state.user,
    card: state.cards[localState.currentCardId],
  };
};

export const SettingsCardPreviewScreen = connect(mapStateToProps)(
  SettingsCardPreviewScreenUnconnected
);
