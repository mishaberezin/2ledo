import React from 'react';
import { Dimensions, View } from 'react-native';
import { withStyles, Text } from '@ui-kitten/components';
import { TEXT_COLOR } from '@app/constants/colors';

const LeftMessageComponent = ({ themedStyle, style, message }) => {
  const { text } = message;

  return (
    <View style={[themedStyle.cloudContainer, style]}>
      <View style={[themedStyle.cloud, themedStyle.cloudLeft]}>
        <Text style={themedStyle.text}>{text}</Text>
      </View>
    </View>
  );
};

const LeftMessage = withStyles(LeftMessageComponent, () => ({
  cloudContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cloud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E3E3E8',
    maxWidth: Dimensions.get('window').width - 120,
  },
  text: {
    fontFamily: 'ceracy-desktop-medium',
    fontSize: 16,
    color: TEXT_COLOR,
  },
  cloudLeft: {
    left: -3,
    marginRight: 16,
    borderBottomLeftRadius: 0,
  },
}));

export default LeftMessage;
