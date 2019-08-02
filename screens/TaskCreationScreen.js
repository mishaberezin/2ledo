import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import { Text, Icon as RneIcon, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';


import { MonoText } from '../components/StyledText';
import Ball from '../components/Ball';

const mainColorLight = '#e4bdfe';
const mainColor = '#ab2efe';

const MyButton = (props) => (
  <Button
    {...props}
    ViewComponent={LinearGradient} // Don't forget this!
    linearGradientProps={{
      colors: props.iconRight ? [mainColor, mainColorLight] : [mainColorLight, mainColor],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
    }}
    titleStyle={{ fontSize: 30 }}
    buttonStyle={{ borderRadius: 20, marginTop: 20, width: 150, height: 60, marginRight: 5 }}
    icon={
      <Icon
        name={`arrow-${props.iconRight ? 'right' : 'left'}`}
        size={25}
        color="white"
      />
    }
  />
)

const StartScreen = ({ toNext }) => {
  return (
    <View style={styles.screenStepBlock}>
      <View style={styles.stepContentTextBlock}>
        <View style={styles.headerBlock}>
          <View style={styles.headerIcon}>
            <RneIcon
              size={60}
              name='home'
              type='font-awesome'
              color={mainColor}
            />
          </View>
          <Text h3 style={styles.headerText}>Создание предложения</Text>
        </View>
        <Image
          source={require('../assets/images/search-for-flat.jpg')}
          style={{ width: 300, height: 300 }}>
        </Image>
      </View>
      <View style={styles.actionsBlock}>
        <MyButton title='Начать ' onPress={toNext} iconRight />
      </View>
    </View>
  )
}

const SecondScreen = ({ toNext, toPrev }) => {
  return (
    <View style={styles.screenStepBlock}>
      <View style={styles.stepContentTextBlock}>
        <View style={styles.headerBlock}>
          <View style={styles.headerIcon}>
            <RneIcon
              size={60}
              name='home'
              type='font-awesome'
              color={mainColor}
            />
          </View>
          <Text h3 style={styles.headerText}>Укажите что-то там</Text>
        </View>
      </View>
      <View style={styles.actionsBlock}>
        <MyButton title='Назад ' onPress={toPrev} />
        <MyButton title='Далее ' onPress={toNext} iconRight />
      </View>
    </View>
  )
}

export default function TaskCreationScreen() {
  const [activeScreen, setActiveScreen] = useState('start');
  const screens = {
    start: () => <StartScreen toNext={() => setActiveScreen('second')} />,
    second: () => <SecondScreen toPrev={() => setActiveScreen('start')} />,
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {screens[activeScreen]()}
      </View>
    </View>
  );
};



TaskCreationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColorLight,
    paddingTop: 50,
    padding: 10,
    paddingBottom: 0,
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: '#fff',
  },
  headerBlock: {
    display: "flex",
    alignItems: "center",
    fontSize: 30,
    marginBottom: 10,
  },
  headerText: {
    textAlign: "center",
    color: mainColor,
  },
  stepContentTextBlock: {
    display: "flex",
    alignItems: "center",
    minHeight: '75%',
  },
  actionsBlock: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center"
  }
});
