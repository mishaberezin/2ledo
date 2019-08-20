
import React from 'react';
import {
  Dimensions,
  View
} from 'react-native';
import { withStyles, Text } from 'react-native-ui-kitten';
// import { MessageContent } from './messageContent.component';

const LeftMessageComponent = ({ themedStyle, style, message }) => {
  const { text } = message;

  return ( 
    <View style={[themedStyle.cloudContainer, style]}> 
      <View style={[themedStyle.cloud, themedStyle.cloudLeft]}>
      {/* <MessageContent message={message}>
          {children}
        </MessageContent> */}
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E3E3E8',
    maxWidth: Dimensions.get('window').width - 120,
  },
  text: {
    color: '#25265E'
  },
  cloudLeft: {
    left: -3,
    marginRight: 16,
    borderBottomLeftRadius: 0,
  }
}));

export default LeftMessage;
