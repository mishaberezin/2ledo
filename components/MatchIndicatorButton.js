import React from 'react';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideMatchIndicator } from '../redux/actions/localStateActions';

const MatchIndicatorButton = ({ active, hideMatchIndicator, onPress }) => {
  const icon = {
    type: 'material',
    name: 'favorite',
    ...(active ? { color: 'red' } : {}),
  };

  return (
    <Button
      buttonStyle={{
        height: 56,
        justifyContent: 'space-between',
      }}
      type="clear"
      icon={icon}
      onPress={() => {
        if (active) {
          hideMatchIndicator();
        }
        onPress();
      }}
    />
  );
};

const mapStateToProps = ({ localState: { matchIndicator } }) => ({
  active: matchIndicator,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ hideMatchIndicator }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchIndicatorButton);
