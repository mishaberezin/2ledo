// TODO Унести в чатбота.

import React, { useState } from 'react';
import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button, ButtonGroup, Slider, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const mainColorLight = '#e4bdfe';
const mainColor = '#ab2efe';

const MyButton = props => (
  <Button
    {...props}
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: [mainColor, mainColorLight],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
    }}
    titleStyle={{ fontSize: 20 }}
    buttonStyle={{
      borderRadius: 20,
      marginTop: 20,
      height: 45,
      marginRight: 5,
    }}
  />
);

const StartScreen = ({ toNext, location }) => {
  return (
    <View style={styles.screenStepBlock}>
      <View style={styles.stepContentTextBlock}>
        <View style={styles.headerBlock}>
          <View style={styles.headerIcon}></View>
          <Text h3 style={styles.headerText}>
            Создание предложения
          </Text>
        </View>
        <View
          style={{ ...styles.stepContentQuestionBlock, alignItems: 'center' }}
        >
          <Image
            source={require('../assets/images/search-for-flat.jpg')}
            style={{ width: 250, height: 200 }}
          />
          <Text style={styles.questionText}>
            Ответите на нескольо вопросов?
          </Text>
          <Text style={styles.questionText}>
            {location &&
              `Ваши координаты (${location.coords.latitude},${location.coords.longitude})`}
          </Text>
        </View>
      </View>
      <View style={styles.actionsBlock}>
        <MyButton title="Начать" onPress={toNext} />
      </View>
    </View>
  );
};

const SecondScreen = ({ toNext, toPrev }) => {
  const types = ['Комнату', 'Квартиру'];
  const typesCount = ['Одна', 'Две', 'Три', 'Студия'];

  const [type, setType] = useState(0);
  const [price, setPrice] = useState(30);
  const [typeCount, setTypeCount] = useState(1);

  return (
    <View style={styles.screenStepBlock}>
      <View style={styles.stepContentTextBlock}>
        <View style={styles.headerBlock}>
          <View style={styles.headerIcon}></View>
        </View>
        <View style={styles.stepContentQuestionBlock}>
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
        </View>

        {type === 1 ? (
          <View style={styles.stepContentQuestionBlock}>
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
          </View>
        ) : null}
        <View style={styles.stepContentQuestionBlock}>
          <Text style={styles.questionText}>Сколько за месяц?</Text>
          <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
            <Slider
              step={1}
              maximumValue={200}
              value={price}
              thumbTintColor={mainColor}
              onValueChange={setPrice}
            />
            <Text style={styles.sliderText}>{price} 000 Руб.</Text>
          </View>
        </View>
      </View>
      <View style={styles.actionsBlock}>
        <MyButton title="Назад" onPress={toPrev} />
        <MyButton
          title="Далее"
          onPress={() =>
            toNext({
              type,
              price,
              typeCount,
            })
          }
        />
      </View>
    </View>
  );
};

const FinalScreen = ({ data, toNext, userPhoto }) => {
  return (
    <View style={styles.screenStepBlock}>
      <View style={styles.stepContentTextBlock}>
        <View style={styles.headerBlock}>
          <View style={styles.headerIcon}></View>
          <Text h4 style={styles.headerText}>
            Мы готовы!
          </Text>
        </View>
        <View
          style={{ ...styles.stepContentQuestionBlock, alignItems: 'center' }}
        >
          <Image
            source={require('../assets/images/ready_to_road.gif')}
            style={{ width: 120, height: 120 }}
          />
          {/* Ваще огонь код */}
          <Text h5 style={styles.headerText}>
            Вы ищете {data.type === 0 && 'комнату'}
            {data.type === 1
              ? data.typeCount < 3
                ? ['одно', 'двух', 'трех'][data.typeCount] +
                  ' комантную квартиру'
                : 'Студию'
              : ' '}
            &nbsp;за&nbsp;
            {data.price}&nbsp;000&nbsp;рублей в&nbsp;месяц.
          </Text>
        </View>
        <View
          style={{ ...styles.stepContentQuestionBlock, alignItems: 'center' }}
        >
          <Card>
            <Image
              source={{ uri: userPhoto }}
              style={{ width: 120, height: 120 }}
            />
          </Card>
        </View>
      </View>
      <Text style={styles.questionText}>
        Хотите посмотреть, что мы для Вас нашли?
      </Text>
      <View style={styles.actionsBlock}>
        <MyButton title="Посмотреть" onPress={toNext} />
      </View>
    </View>
  );
};

function TaskCreationScreen(props) {
  const { navigation } = props;
  const [activeScreen, setActiveScreen] = useState('start');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [location, setLocation] = useState(null);

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  if (!location) {
    getLocationAsync();
  }

  const screens = {
    start: () => (
      <StartScreen
        toNext={() => setActiveScreen('second')}
        location={location}
      />
    ),
    second: () => (
      <SecondScreen
        toPrev={() => setActiveScreen('start')}
        toNext={data => {
          setLoading(true);
          setData(data);
          new Promise(res => setTimeout(res, 200))
            .then(() => {
              setActiveScreen('final');
            })
            .finally(() => setLoading(false));
        }}
      />
    ),
    final: () => (
      <FinalScreen
        data={data}
        userPhoto={props.user.photo}
        toNext={() => {
          setLoading(true);
          navigation.navigate('Serp');
        }}
      />
    ),
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientWrap}
        colors={[mainColor, mainColorLight]}
      >
        <View style={styles.contentContainer}>
          {loading ? (
            <View
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <ActivityIndicator size="large" color={mainColor} />
            </View>
          ) : (
            screens[activeScreen]()
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

TaskCreationScreen.navigationOptions = {
  title: '👨‍🎨',
  header: null,
};

export default connect(({ user }) => ({ user }))(TaskCreationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    height: '100%',
  },
  gradientWrap: {
    height: '100%',
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
    display: 'flex',
    alignItems: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
  headerText: {
    textAlign: 'center',
    color: mainColor,
  },
  stepContentQuestionBlock: {
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  questionText: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 15,
    color: 'darkgray',
  },
  sliderText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 20,
  },
  stepContentTextBlock: {
    alignItems: 'stretch',
    minHeight: '80%',
    alignSelf: 'stretch',
  },
  actionsBlock: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
});
