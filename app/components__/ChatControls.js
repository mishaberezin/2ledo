import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CHATBOT_SCENARIOS } from '../constants/chatbotScenarios';
import { withStyles } from 'react-native-ui-kitten';

const ChatControlsComponent = ({
  themedStyle,
  style,
  currentScenarioId,
  isWriting,
  navigate,
}) => {
  const scenario = CHATBOT_SCENARIOS.messages[currentScenarioId];

  return (
    <View style={[themedStyle.controlsContainer, style]}>
      <View style={[themedStyle.controls]}>
        {scenario &&
          scenario.controls &&
          !isWriting &&
          scenario.controls.map((render, index) =>
            render({
              key: index,
              buttonStyle: [themedStyle.control],
              titleStyle: [themedStyle.title],
              navigate,
            })
          )}
      </View>
    </View>
  );
};

const ChatControls = withStyles(ChatControlsComponent, () => ({
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F7F9FC',
  },
  control: {
    marginTop: 10,
    marginLeft: 11,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 24,
    minWidth: 100,
    backgroundColor: '#25265E',
  },
  controls: {
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'ceracy-desktop-medium',
    fontSize: 16,
  },
}));

const mapStateToProps = state => ({
  currentScenarioId: state.chatbot.currentScenarioId,
  isWriting: state.chatbot.isWriting,
});

export default connect(mapStateToProps)(ChatControls);
