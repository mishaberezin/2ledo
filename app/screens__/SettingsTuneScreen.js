import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentCardId } from '../redux/actions/localStateActions';
import { unsetUserToken } from '../redux/actions/loginActions';
import { View } from 'react-native';
import { SCREEN_BACKGROUND } from '../constants/colors';
import { ButtonGroup, Button } from 'react-native-elements';

function SettingsTuneScreenUnconnected(props) {
  const { cards, currentCardId, setCurrentCardId, unsetUserToken } = props;

  const items = Object.keys(cards).map((id) => ({ type: cards[id].type, id }));

  const handleExitButtonPress = useCallback(() => {
    (async () => {
      await unsetUserToken();
      props.navigation.navigate('Init');
    })();
  }, [props.navigation, unsetUserToken]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: SCREEN_BACKGROUND,
        paddingTop: 10,
      }}
    >
      <ButtonGroup
        onPress={(index) => setCurrentCardId(items[index].id)}
        selectedIndex={items.findIndex((item) => item.id === currentCardId)}
        buttons={items.map((item) => item.type)}
        containerStyle={{ height: 30 }}
      />
      <Button
        buttonStyle={{ backgroundColor: 'gray', marginHorizontal: 10 }}
        title="Выйти"
        onPress={handleExitButtonPress}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    currentCardId: state.localState.currentCardId,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCurrentCardId,
      unsetUserToken,
    },
    dispatch,
  );

export const SettingsTuneScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsTuneScreenUnconnected);
