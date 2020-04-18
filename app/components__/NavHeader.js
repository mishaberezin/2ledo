import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { ToledoHeader4 } from './ToledoHeader4';
import { TEXT_COLOR } from '@toledo/constants/colors';

function HeaderText(props) {
  return (
    <Text
      style={[
        {
          fontSize: 15,
          lineHeight: 18,
          color: TEXT_COLOR,
          fontFamily: 'ceracy-desktop-medium',
        },
        ...props.style,
      ]}
      onPress={props.onPress}
    >
      {props.children}
    </Text>
  );
}

export function NavHeader(props) {
  const { title, menuItems } = props;

  return (
    <View
      style={[
        styles.container,
        menuItems ? styles.containerNormal : styles.containerCompact,
      ]}
    >
      <View style={styles.topLine}></View>
      <View style={[styles.titleLine]}>
        <ToledoHeader4>{title}</ToledoHeader4>
      </View>
      {menuItems && (
        <ScrollView
          style={styles.menuLine}
          contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'row',
          }}
          horizontal={true}
        >
          {menuItems.map((item, i) => (
            <HeaderText
              key={i}
              style={[{ marginRight: 15 }, item.style]}
              onPress={item.onPress}
            >
              {item.text}
            </HeaderText>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  containerNormal: {
    height: 170,
  },
  containerCompact: {
    height: 120,
  },
  topLine: {
    flex: 1,
  },
  titleLine: {
    height: 40,
    marginLeft: 32,
  },
  menuLine: {
    height: 50,
    paddingLeft: 32,
    flexGrow: 0,
  },
});
