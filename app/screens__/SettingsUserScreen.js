import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserProp } from '../redux/actions/userActions';
import { View } from 'react-native';
import { SchemaUserSettings } from '../components/Schemas/SchemaUserSettings';

function SettingsUserScreenUnconnected(props) {
  const { user, setUserProp } = props;
  const { data } = user;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FCFBFF',
        paddingTop: 10,
      }}
    >
      <SchemaUserSettings data={data} onChange={setUserProp} />
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
      setUserProp,
    },
    dispatch
  );

export const SettingsUserScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsUserScreenUnconnected);
