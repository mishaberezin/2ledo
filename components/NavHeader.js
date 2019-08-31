import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import COLORS from '../constants/colors';

function HeaderText(props) {
  return (
    <Text
      style={{
        fontSize: 15,
        lineHeight: 18,
        color: COLORS.textColor,
        fontFamily: 'ceracy-desktop-medium',
        ...props.style,
      }}
      onPress={props.onPress}
    >
      {props.children}
    </Text>
  );
}
function HeaderTitleText(props) {
  return (
    <Text
      style={{
        fontFamily: 'ceracy-desktop-bold',
        fontSize: 28,
        lineHeight: 30,
        color: COLORS.textColor,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
}

function NavHeader(props) {
  const { title, menuItems } = props;

  return (
    <View style={styles.container}>
      <View style={styles.topLine}></View>
      <View style={styles.titleLine}>
        <HeaderTitleText>{title}</HeaderTitleText>
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
              style={{ marginRight: 15 }}
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
    height: 170,
    backgroundColor: '#FFF',
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

export default NavHeader;
