
import React from 'react';
import {
  Dimensions,
  View
} from 'react-native';
import { withStyles, Text } from 'react-native-ui-kitten';
// import { MessageContent } from './messageContent.component';

const RightMessageComponent = ({ themedStyle, style, message }) => {
  const { text } = message;
 
  return ( 
    <View style={[themedStyle.cloudContainer, style]}>
      <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
        {/* <MessageContent message={message}>
          {children}
        </MessageContent> */}
        <Text style={themedStyle.text}>{text}</Text>
      </View>
    </View>
  );
};

const RightMessage = withStyles(RightMessageComponent, () => ({
  cloudContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cloud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,
    maxWidth: Dimensions.get('window').width - 120,
  },
  text: {
    color: '#25265E'
  },
  cloudRight: {
    borderBottomRightRadius: 0,
    left: 3,
    backgroundColor: '#EAE2FC',
    marginLeft: 16,
  },
}));
export default RightMessage;
