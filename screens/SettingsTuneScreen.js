import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions.js';
import { View } from 'react-native';
import { Text } from 'react-native-ui-kitten';

function SettingsTuneScreen(props) {
  const { profile } = props;
  const { tune } = profile;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FCFBFF',
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>price: {tune.price}</Text>
        <Text>numberOfRooms: {tune.numberOfRooms}</Text>
        <Text>FLOOR: {tune.floor}</Text>
        <Text>metro: {tune.metro}</Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTuneScreen);
