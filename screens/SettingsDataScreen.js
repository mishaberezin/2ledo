import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions.js';
import { View } from 'react-native';
import { Text } from 'react-native-ui-kitten';

function SettingsTuneScreen(props) {
  const { profile } = props;
  const { data } = profile;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FCFBFF',
        paddingTop: 10,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>numberOfPeople: {data.numberOfPeople}</Text>
        <Text>Description: {data.description}</Text>
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
