import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions';
import { View } from 'react-native';

import { SchemaUserSettings } from '../components/Schemas/SchemaUserSettings';

function SettingsUserScreenUnconnected(props) {
  const { user } = props;
  const { data } = user;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FCFBFF',
        paddingTop: 10,
      }}
    >
      <SchemaUserSettings data={data} />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    card: state.cards[state.localState.currentCardId],
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUserName,
      setUserPhoto,
    },
    dispatch
  );

export const SettingsUserScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsUserScreenUnconnected);
