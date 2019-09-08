import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCardDataDescription } from '../redux/actions/cardsActions';
import { View, Image } from 'react-native';
import { Text } from 'react-native-ui-kitten';

function SettingsDataScreen(props) {
  const { card } = props;
  const { data } = card;

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
        <View style={{ alignItems: 'flex-start' }}>
          <Text category="h2">Предлагаю</Text>
          <Image
            source={require('../assets/images/card-tenant.png')}
            style={{ width: 250, height: 300 }}
          />
        </View>
        <Text>numberOfPeople: {data.numberOfPeople}</Text>
        <Text>Description: {data.description}</Text>
      </View>
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
      setCardDataDescription,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsDataScreen);
