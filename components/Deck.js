import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  PanResponder,
  Dimensions,
  StyleSheet
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;

class Deck extends Component {
  state = {
    index: 0,
    opacity: 0,
    status: null
  };

  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY(0, 0);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
        const opacity = Math.abs(gesture.dx) / (SCREEN_WIDTH / 2);
        this.setState({ opacity, status: gesture.dx < 0 ? 'no' : 'yes' });
      },
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });
  }

  forceSwipe = direction => {
    const x = (direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH) * 2;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: 250
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
      opacity: 0
    });

    this.position.setValue({ x: 0, y: 0 });
  };

  resetPosition = () => {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 },
      friction: 4
    }).start();
    this.setState({ opacity: 0 });
  };

  getCardStyle = () => {
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-45deg', '0deg', '45deg']
    });

    return {
      ...this.position.getLayout(),
      transform: [{ rotate }]
    };
  };

  render() {
    const { data, renderCard, renderNoMoreCards } = this.props;
    const { opacity } = this.state;

    if (this.state.index >= data.length) {
      return renderNoMoreCards();
    }

    const statusWatermark = (
      <Image
        source={
          this.state.status === 'yes'
            ? require('../assets/images/ok.png')
            : require('../assets/images/nope.png')
        }
        style={[styles.cardStatus, { opacity }]}
      />
    );

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
                  style={[this.getCardStyle(), styles.cardStyle]}
                  {...this.panResponder.panHandlers}
                >
                  {renderCard(card)}
                  {statusWatermark}
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
    position: 'absolute',
    width: SCREEN_WIDTH,
    justifyContent: 'center'
  },
  cardStatus: {
    position: 'absolute',
    width: 200,
    height: 200,
    alignSelf: 'center',
    opacity: 0
  }
});

export default Deck;
