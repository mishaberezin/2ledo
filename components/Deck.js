import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;

class Deck extends Component {
  state = {
    index: 0,
    opacity: 0,
    status: null,
  };

  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY(0, 0);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
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

  onSwipeComplete = direction => {
    const { onSwipeLeft, onSwipeRight } = this.props;
    const item = this.props.data[this.state.index];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
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
    if (this.props.swipeDisabled) {
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

  render() {
    const { data, renderCard, renderNoMoreCards, swipeDisabled } = this.props;

    if (this.state.index >= data.length) {
      return renderNoMoreCards();
    }

    const cardStyles = [this.getCardStyle(), styles.cardStyle];

    if (swipeDisabled) {
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
                  {...(swipeDisabled ? {} : this.panResponder.panHandlers)}
                >
                  {renderCard(card)}
                </Animated.View>
              );
            }
            return (
              <Animated.View style={styles.cardStyle} key={card.id}>
                {renderCard(card)}
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
  cardStatus: {
    position: 'absolute',
    width: 200,
    height: 200,
    alignSelf: 'center',
    opacity: 0,
  },
});

export default Deck;
