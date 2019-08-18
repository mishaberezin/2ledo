import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

function ChatScreen(props) {
  const { navigation } = props;

  const onMatchButtonPress = () => {
    navigation.navigate('Match');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Button type="outline" title="Связаться" onPress={onMatchButtonPress} />
      </View>
    </View>
  );
}

ChatScreen.navigationOptions = {
  title: '🎴',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ChatScreen;
