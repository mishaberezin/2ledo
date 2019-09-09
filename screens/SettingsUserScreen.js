import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions';
import { View } from 'react-native';
import { Text } from 'react-native-ui-kitten';

function SettingsUserScreen(props) {
  const { card } = props;

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
        <Text category="h2">Ищу</Text>
        <Text>{card.type === 'tenant' ? 'Квартиру' : 'Жильца'}</Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    card: state.cards[state.localState.currentCard],
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
)(SettingsUserScreen);
