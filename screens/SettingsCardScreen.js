import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCardDataDescription } from '../redux/actions/cardsActions';
import { View, Image } from 'react-native';
import { Text } from 'react-native-ui-kitten';

function SettingsDataScreen(props) {
  const { card } = props;
  const { type, data } = card;

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
        <View style={{ paddingLeft: 20 }}>
          <Text category="h2">
            {type === 'tenant' ? 'Ищу квартиру' : 'Ищу жильца'}
          </Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Image
            source={require('../assets/images/card-tenant.png')}
            style={{ width: 250, height: 300 }}
          />
        </View>
        <Text>Photos: {data.photos.length}</Text>
        <Text>numberOfPeople: {data.numberOfPeople}</Text>
        <Text>Description: {data.description}</Text>
        <Text>Price: {data.price}</Text>
        <Text>Минимальное число комнат: {data.minNumberOfRooms}</Text>
        <Text>RentalPeriod: {data.rentalPeriod}</Text>
        <Text>Geopoints: {data.geopoints}</Text>
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
