import React from 'react';
import { Dimensions, View } from 'react-native';
import { withStyles, Text } from '@ui-kitten/components';
import { TEXT_COLOR } from '@app/constants/colors';

const RightMessageComponent = ({ themedStyle, style, message }) => {
  const { text } = message;

  return (
    <View style={[themedStyle.cloudContainer, style]}>
      <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
        <Text style={themedStyle.text}>{text}</Text>
      </View>
    </View>
  );
};

const RightMessage = withStyles(RightMessageComponent, () => ({
  cloudContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cloud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 24,
    maxWidth: Dimensions.get('window').width - 120,
  },
  text: {
    fontFamily: 'ceracy-desktop-medium',
    fontSize: 16,
    color: TEXT_COLOR,
  },
  cloudRight: {
    borderBottomRightRadius: 0,
    left: 3,
    backgroundColor: '#EAE2FC',
    marginLeft: 16,
  },
}));
export default RightMessage;
