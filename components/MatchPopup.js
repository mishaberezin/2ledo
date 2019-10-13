import React, { useEffect } from 'react';
import { View, Animated } from 'react-native';
import { Text, withStyles } from 'react-native-ui-kitten';

import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';

const MatchPopup = ({ visible, /* card, */ themedStyle }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    console.log('visible', visible);
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }).start();
    }
  }, [opacity, visible]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[themedStyle.container, { opacity }]}>
      <LinearGradient
        style={themedStyle.gradientContainer}
        colors={[
          'transparent',
          '#A768FE',
          '#93C6F9',
          '#97B4FA',
          '#A768FE',
          'transparent',
        ]}
        start={[0.5, 0]}
        end={[0.5, 1]}
        location={[0.25, 0.4, 1]}
      >
        <View style={themedStyle.modalContainer}>
          <Text>Its Match!</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const StyledMatchPopup = withStyles(MatchPopup, () => ({
  container: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 9,
  },
  gradientContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: 'blue',
  },
}));

const mapStateToProps = ({ localState: { matchPopup = false } }) => ({
  visible: matchPopup && matchPopup.visible,
  card: matchPopup && matchPopup.card,
});

export default connect(mapStateToProps)(StyledMatchPopup);
