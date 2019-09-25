import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentCard } from '../redux/actions/localStateActions';
import { View } from 'react-native';
import { Select } from 'react-native-ui-kitten';
import COLORS from '../constants/colors';

function SettingsTuneScreenUnconnected(props) {
  const { cards, currentCard, setCurrentCard } = props;

  const onSelectCard = selectedOption => {
    setCurrentCard(selectedOption.text);
  };

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
        <Select
          data={Object.keys(cards).map(key => ({ text: key }))}
          selectedOption={{ text: currentCard }}
          onSelect={onSelectCard}
        />

        {/* <SettingsRoomsCount />
        <SettingsPriceRange />
        <SettingsMetro /> */}
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    currentCard: state.localState.currentCard,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentCard,
    },
    dispatch
  );

export const SettingsTuneScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTuneScreenUnconnected);
