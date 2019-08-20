import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from '../components/Deck';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    title: 'Видовая двушка в Котельниках',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
    desc:
      'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой. Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона. Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город. В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
    desc:
      'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой. Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона. Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город. В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    title: 'Видовая двушка в Котельниках',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

function SerpScreen() {
  const [cardOpened, setCardOpened] = useState(false);
  const openCard = () => setCardOpened(true);
  const closeCard = () => setCardOpened(false);

  const onDetailsButtonPress = () => {
    cardOpened ? closeCard() : openCard();
  };

  const renderCard = ({ text, title = 'no title', desc, uri }) => {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Card
          title={text}
          image={{ uri }}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          <Text style={styles.cardTitle}>{title}</Text>
          <Button
            backgroundColor="#03A9F4"
            title={cardOpened ? 'Свернуть' : 'Подробнее'}
            onPress={onDetailsButtonPress}
          />
          {cardOpened ? (
            <View style={styles.cardDescriptionWrap}>
              <Text style={styles.cardDescriptionText}>{desc}</Text>
            </View>
          ) : null}
        </Card>
      </ScrollView>
    );
  };

  const toNextCard = () => {};

  const renderNoMoreCards = () => {
    return (
      <Card title={'All done!'}>
        <Text style={{ marginBottom: 20 }}>No more cards</Text>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Deck
        swipeDisabled={cardOpened}
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeLeft={toNextCard}
        onSwipeRight={toNextCard}
      />
    </View>
  );
}

SerpScreen.navigationOptions = {
  title: '🗂',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  image: {
    height: SCREEN_HEIGHT * 0.5,
  },
  cardTitle: {
    marginBottom: 20,
  },
  cardDescriptionWrap: {
    marginTop: 20,
  },
  cardDescriptionText: {
    fontSize: 20,
  },
});

export default SerpScreen;
