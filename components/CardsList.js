import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './Deck';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'
  }
];

export default function CardsList() {
  const renderCard = ({ text, uri }) => {
    return (
      <Card
        title={text}
        image={{ uri }}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <Text style={{ marginBottom: 20 }}>Text some test about card</Text>
        <Button backgroundColor="#03A9F4" title="View now" />
      </Card>
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
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeLeft={toNextCard}
        onSwipeRight={toNextCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  image: {
    height: SCREEN_HEIGHT * 0.5
  }
});
