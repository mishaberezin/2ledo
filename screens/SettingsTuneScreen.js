import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentCardId } from '../redux/actions/localStateActions';
import { View } from 'react-native';
import { SCREEN_BACKGROUND } from '../constants/colors';
import { ButtonGroup } from 'react-native-elements';

function SettingsTuneScreenUnconnected(props) {
  const { cards, currentCardId, setCurrentCardId } = props;

  const items = Object.keys(cards).map(id => ({ type: cards[id].type, id }));

  console.log(items);
  console.log(currentCardId);
  console.log(items.findIndex(item => item.id === currentCardId));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: SCREEN_BACKGROUND,
        paddingTop: 10,
      }}
    >
      <ButtonGroup
        onPress={index => setCurrentCardId(items[index].id)}
        selectedIndex={items.findIndex(item => item.id === currentCardId)}
        buttons={items.map(item => item.type)}
        containerStyle={{ height: 30 }}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    currentCardId: state.localState.currentCardId,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentCardId,
    },
    dispatch
  );

export const SettingsTuneScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTuneScreenUnconnected);
