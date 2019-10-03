import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCardProp } from '../redux/actions/cardActions';
import { View } from 'react-native';

import { MAIN_BRIGHT } from '@toledo/constants/colors';

import { SchemaTenantCardSettings } from '../components/Schemas/SchemaTenantCardSettings';
import { SchemaHostCardSettings } from '../components/Schemas/SchemaHostCardSettings';

function SettingsCardScreenUnconnected(props) {
  const { card, setCardProp } = props;
  const { type, data } = card;
  const cardId = card.id;

  let SchemaComponent;
  if (type === 'tenant') {
    SchemaComponent = SchemaTenantCardSettings;
  } else {
    SchemaComponent = SchemaHostCardSettings;
  }

  const onChange = ({ name, value }) => {
    setCardProp({ id: cardId, name, value });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MAIN_BRIGHT,
        paddingTop: 10,
      }}
    >
      <SchemaComponent data={data} onChange={onChange} />
    </View>
  );
}

const mapStateToProps = state => {
  const { localState } = state;

  return {
    user: state.user,
    card: state.cards[localState.currentCard],
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCardProp,
    },
    dispatch
  );

export const SettingsCardScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsCardScreenUnconnected);
