import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCardProp } from '../redux/actions/cardActions';
import { View } from 'react-native';
import { Button, Text } from 'react-native';

import { SchemaTenantCardSettings } from '../components/Schemas/SchemaTenantCardSettings';
import { SchemaHostCardSettings } from '../components/Schemas/SchemaHostCardSettings';

import Collapsible from 'react-native-collapsible';

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

  const [collapsed, setCollapsed] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FCFBFF',
        paddingTop: 10,
      }}
    >
      <Button
        title={collapsed ? 'Раскрыть' : 'Закрыть'}
        onPress={() => setCollapsed(!collapsed)}
      />
      <Collapsible collapsed={collapsed}>
        <Text>HELLLLLLOOOOO</Text>
      </Collapsible>
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
