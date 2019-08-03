import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';
import {
  Text, Icon as RneIcon, Button, CheckBox,
  ButtonGroup, Slider
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

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
    titleStyle={{ fontSize: 20 }}
    buttonStyle={{ borderRadius: 20, marginTop: 20, height: 45, marginRight: 5 }}
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
          style={{ width: 200, height: 200 }}>
        </Image>
        <Text style={styles.questionText}>Ответите на нескольо вопросов?</Text>
      </View>
      <View style={styles.actionsBlock}>
        <MyButton title='Начать' onPress={toNext} iconRight />
      </View>
    </View>
  )
}

const SecondScreen = ({ toNext, toPrev }) => {
  const types = ['Комнату', 'Квартиру'];
  const typesCount = ['Одна', 'Две', 'Три', 'Студия'];

  const [type, setType] = useState(0);
  const [price, setPrice] = useState(30);
  const [typeCount, setTypeCount] = useState(1);
  const [remont, setRemont] = useState(false);

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
          <Text h3 style={styles.headerText}>О поиске</Text>
          <Text style={styles.questionText}>Что Вы ищете?</Text>
          <ButtonGroup
            buttons={types}
            selectedIndex={type}
            buttonStyle={{ backgroundColor: '#fff' }}
            onPress={setType}
            selectedButtonStyle={{ backgroundColor: mainColor }}
            textStyle={{ color: mainColor }}
            selectedTextStyle={{ color: '#fff' }}
          />

          {
            type === 1 ?
              <React.Fragment>
                <Text style={styles.questionText}>Сколько комнат?</Text>
                <ButtonGroup
                  buttons={typesCount}
                  selectedIndex={typeCount}
                  buttonStyle={{ backgroundColor: '#fff' }}
                  onPress={setTypeCount}
                  selectedButtonStyle={{ backgroundColor: mainColor }}
                  textStyle={{ color: mainColor }}
                  selectedTextStyle={{ color: '#fff' }}
                />
              </React.Fragment>
              :
              null
          }

          <Text style={styles.questionText}>Ваш бюджет</Text>
          <View style={{ width: 250, alignItems: 'stretch', justifyContent: 'center' }}>
            <Slider
              step={1}
              maximumValue={200}
              value={price}
              thumbTintColor={mainColor}
              onValueChange={setPrice}
            />
            <Text style={styles.sliderText}>{price} 000 Руб.</Text>
          </View>

          <Text style={styles.questionText}>Дополнительно</Text>
          <CheckBox
            iconRight
            title='С ремонтом'
            checked={remont}
            checkedColor={mainColor}
            onPress={() => setRemont(!remont)}
          />

        </View>
      </View>
      <View style={styles.actionsBlock}>
        <MyButton title='Назад' onPress={toPrev} />
        <MyButton title='Далее' onPress={toNext} iconRight />
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
      <LinearGradient style={styles.gradientWrap} colors={[mainColor, mainColorLight]}>
        <View style={styles.contentContainer}>
          {screens[activeScreen]()}
        </View>
      </LinearGradient>
    </View>
  );
};



TaskCreationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    height: '100%',
  },
  gradientWrap: {
    height: '100%',
    padding: 10,
    paddingBottom: 0
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
  questionText: {
    textAlign: "left",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 15,
  },
  sliderText: {
    textAlign: "center",
    color: 'gray',
    fontSize: 20,
  },
  stepContentTextBlock: {
    display: "flex",
    alignItems: "center",
    minHeight: '80%',
  },
  actionsBlock: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  }
});
