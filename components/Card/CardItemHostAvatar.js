import React from 'react';
import { View } from 'react-native';
import { Text, Avatar, withStyles } from 'react-native-ui-kitten';

const CardItemHostAvatar = ({ uri, name, themedStyle }) => {
  return (
    <View style={themedStyle.container}>
      <Avatar source={{ uri }} size="small" />
      <Text style={themedStyle.avatarBlockName} category="s1">
        {name}
      </Text>
    </View>
  );
};

export default withStyles(CardItemHostAvatar, () => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 30,
  },
  avatarBlockName: {
    marginLeft: 10,
  },
}));
