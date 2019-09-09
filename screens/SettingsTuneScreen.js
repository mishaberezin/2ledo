import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCardTunePrice } from '../redux/actions/cardsActions';
import { View } from 'react-native';
import { SettingsRoomsCount } from '../components/Settings/SettingsRoomsCount';
import { SettingsPriceRange } from '../components/Settings/SettingsPriceRange';
import { SettingsFirstFloorIsOk } from '../components/Settings/SettingsFirstFloorIsOk';
import { SettingsMetro } from '../components/Settings/SettingsMetro';
import COLORS from '../constants/colors';

function SettingsTuneScreen(props) {
  const { card } = props;
  const { tune } = card;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.screenBackground,
        paddingTop: 10,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <SettingsRoomsCount />
        <SettingsPriceRange />
        <SettingsFirstFloorIsOk value={tune.firstFloorIsOk} />
        <SettingsMetro />
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
      setCardTunePrice,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTuneScreen);
