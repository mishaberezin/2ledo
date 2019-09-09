import React, { useEffect, useState } from 'react';

import { TouchableOpacity, Dimensions, Animated } from 'react-native';
import { withStyles } from 'react-native-ui-kitten';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import colors from '../constants/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SerpControllsContainer = ({ themedStyle, onPress, visible }) => {
  const onYesPress = () => onPress('yes');
  const onNoPress = () => onPress('no');
  const onThinkPress = () => onPress('think');

  const [animatedOpacity] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.spring(animatedOpacity, {
      toValue: visible ? 1 : 0,
    }).start();
  }, [animatedOpacity, visible]);

  return (
    <Animated.View
      style={[themedStyle.controlsContainer, { opacity: animatedOpacity }]}
    >
      <TouchableOpacity
        style={themedStyle.controlContainer}
        onPress={onNoPress}
      >
        <Ionicons
          name={'ios-thumbs-down'}
          size={32}
          color="#fff"
          style={{ position: 'relative', top: 5 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={themedStyle.controlContainer}
        onPress={onThinkPress}
      >
        <FontAwesome name="coffee" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={themedStyle.controlContainer}
        onPress={onYesPress}
      >
        <Ionicons name={'ios-thumbs-up'} size={32} color="#fff" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const SerpControlls = withStyles(SerpControllsContainer, () => ({
  controlsContainer: {
    backgroundColor: colors.darkVioletColor,
    opacity: 0.8,
    height: 100,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  controlContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    margin: 20,
    padding: 10,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default SerpControlls;
