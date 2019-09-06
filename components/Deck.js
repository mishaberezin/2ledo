import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import DeckCard from '../components/DeckCard';

import { Card } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;

class Deck extends Component {
  state = {
    index: 0,
    cardOpened: false,
    cardHeight: null,
  };

  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY(0, 0);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        const lowerCardPosition = this.state.cardHeight / 5;

        this.position.setValue({
          x: gesture.dx,
          y: gesture.dy > lowerCardPosition ? lowerCardPosition : gesture.dy,
        });
      },
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      },
    });
  }

  forceSwipe = direction => {
    const x = (direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH) * 2;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: 250,
    }).start(() => {
      this.onSwipeComplete(direction);
    });
  };

  onSwipeComplete = (/*direction*/) => {
    //const { onSwipeLeft, onSwipeRight } = this.props;
    //const item = this.props.data[this.state.index];
    //direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.setState({
      index: this.state.index + 1,
    });

    this.position.setValue({ x: 0, y: 0 });
  };

  resetPosition = () => {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 },
      friction: 4,
    }).start();
  };

  getCardStyle = () => {
    if (this.state.cardOpened) {
      return;
    }
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-45deg', '0deg', '45deg'],
    });

    return {
      ...this.position.getLayout(),
      transform: [{ rotate }],
    };
  };

  renderCard = props => {
    return (
      <DeckCard
        {...props}
        opened={this.state.cardOpened}
        onOpen={this.openCard}
        onClose={this.closeCard}
        onLayoutHeight={cardHeight => {
          if (!this.state.cardHeight) {
            this.setState({ cardHeight });
          }
        }}
      />
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card title={'All done!'}>
        <Text style={{ marginBottom: 20 }}>No more cards</Text>
      </Card>
    );
  };

  openCard = () => {
    this.setState({ cardOpened: true });
  };

  closeCard = () => {
    this.position.setValue({ x: 0, y: 0 });
    this.setState({ cardOpened: false });
  };

  render() {
    const { data } = this.props;
    const { cardOpened } = this.state;

    if (this.state.index >= data.length) {
      return this.renderNoMoreCards();
    }

    const cardStyles = [this.getCardStyle(), styles.cardStyle];

    if (cardOpened) {
      cardStyles.push(styles.cardStyleStatic);
    }

    return (
      <View>
        {data
          .map((card, i) => {
            if (i < this.state.index) {
              return null;
            }
            if (i === this.state.index) {
              return (
                <Animated.View
                  key={card.id}
                  style={cardStyles}
                  {...(cardOpened ? {} : this.panResponder.panHandlers)}
                >
                  {this.renderCard(card)}
                </Animated.View>
              );
            }
            return (
              <Animated.View style={styles.cardStyle} key={card.id}>
                {this.renderCard(card)}
              </Animated.View>
            );
          })
          .reverse()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    position: 'absolute',
  },
  cardStyleStatic: {
    position: 'relative',
  },
});

export default Deck;
