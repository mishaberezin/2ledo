import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { withStyles, Text } from 'react-native-ui-kitten';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { DeckCard } from './Card';
import { DARK_VIOLET_COLOR } from '@toledo/constants/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;

class DeckWithControllsContainer extends Component {
  state = {
    index: 0,
    cardOpened: false,
  };

  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY(0, 0);
    this.controlsOpacity = new Animated.Value(1);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        this.position.setValue({
          x: gesture.dx,
          y: gesture.dy,
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

  renderCard = (card, isCurrent) => {
    return (
      <DeckCard
        card={card}
        opened={isCurrent && this.state.cardOpened}
        onOpen={this.openCard}
        onClose={this.closeCard}
      />
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card title={'Упс!'}>
        <Text style={{ marginBottom: 20 }}>Больше нет карточек</Text>
      </Card>
    );
  };

  openCard = () => {
    this.setState({ cardOpened: true });
    Animated.spring(this.controlsOpacity, { toValue: 0 }).start();
  };

  closeCard = () => {
    this.position.setValue({ x: 0, y: 0 });
    this.setState({ cardOpened: false });
    Animated.spring(this.controlsOpacity, { toValue: 1 }).start();
  };

  hadleControlPress = (toRight = false) => {
    this.forceSwipe(toRight ? 'right' : 'left');
  };

  renderControls = () => {
    const { themedStyle } = this.props;
    return (
      <Animated.View
        style={[
          themedStyle.controlsContainer,
          { opacity: this.controlsOpacity },
        ]}
      >
        <TouchableOpacity
          style={themedStyle.controlContainer}
          onPress={() => this.hadleControlPress(false)}
        >
          <Ionicons
            name={'ios-thumbs-down'}
            size={28}
            color="#fff"
            style={{ position: 'relative', top: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={themedStyle.controlContainer}
          onPress={this.hadleControlPress}
        >
          <FontAwesome name="coffee" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={themedStyle.controlContainer}
          onPress={this.hadleControlPress}
        >
          <Ionicons name={'ios-thumbs-up'} size={28} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  render() {
    const { items, themedStyle } = this.props;
    const { cardOpened, index } = this.state;

    if (index >= items.length) {
      return this.renderNoMoreCards();
    }

    const cards = [this.getCardStyle(), themedStyle.card];

    if (cardOpened) {
      cards.push(themedStyle.cardStatic);
    }

    return (
      <View style={themedStyle.container}>
        <View>
          {items
            .map((card, i) => {
              if (i < index) {
                return null;
              }
              if (i === index) {
                return (
                  <Animated.View
                    key={card.id}
                    style={[cards]}
                    {...(cardOpened ? {} : this.panResponder.panHandlers)}
                  >
                    {this.renderCard(card, true)}
                  </Animated.View>
                );
              }
              return (
                <Animated.View style={themedStyle.card} key={card.id}>
                  {this.renderCard(card)}
                </Animated.View>
              );
            })
            .reverse()}
        </View>
        {this.renderControls()}
      </View>
    );
  }
}

const DeckWithControlls = withStyles(DeckWithControllsContainer, () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    position: 'absolute',
  },
  cardStatic: {
    position: 'relative',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: DARK_VIOLET_COLOR,
    opacity: 0.6,
    height: 60,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  controlContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    margin: 20,
    padding: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default DeckWithControlls;
