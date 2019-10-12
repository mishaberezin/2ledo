import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { withStyles, Text } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { DeckHostCard } from './Card';

const SCREEN_WIDTH = Dimensions.get('window').width;
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

  onSwipeComplete = direction => {
    const card = this.props.items[this.state.index] || null;
    this.props.onSwipe(card.id, direction);
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

  renderCard = ({ data: card }, isCurrent) => {
    const cardStyle =
      !this.state.cardOpened && this.props.themedStyle.cardStyle;
    return (
      <DeckHostCard
        card={card}
        opened={isCurrent && this.state.cardOpened}
        onOpen={this.openCard}
        onClose={this.closeCard}
        cardStyle={cardStyle}
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
          style={[
            themedStyle.controlContainer,
            themedStyle.controlContainerLeft,
          ]}
          onPress={() => this.hadleControlPress(false)}
        >
          <Ionicons
            name={'ios-close-circle'}
            size={50}
            color="red"
            style={{ position: 'relative', top: 5 }}
          />
        </TouchableOpacity>
        {/*<TouchableOpacity
          style={themedStyle.controlContainer}
          onPress={this.hadleControlPress}
        >
          <FontAwesome name="coffee" size={28} color="#fff" />
        </TouchableOpacity>*/}
        <TouchableOpacity
          style={[
            themedStyle.controlContainer,
            themedStyle.controlContainerRight,
          ]}
          onPress={this.hadleControlPress}
        >
          <Ionicons
            name={'ios-checkmark-circle'}
            size={50}
            color="lightgreen"
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  componentDidUpdate() {
    if (this.state.index + 1 === this.props.items.length) {
      this.props.onLastCard(this.props.items.length);
    }
  }

  render() {
    const { items, themedStyle } = this.props;
    const { cardOpened, index } = this.state;

    if (index > items.length) {
      return this.renderNoMoreCards();
    }

    const cardStyle = [this.getCardStyle(), themedStyle.card];

    if (cardOpened) {
      cardStyle.push(themedStyle.cardStatic);
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
                    key={i}
                    style={cardStyle}
                    {...(cardOpened ? {} : this.panResponder.panHandlers)}
                  >
                    {this.renderCard(card, true)}
                  </Animated.View>
                );
              }
              return (
                <Animated.View style={themedStyle.card} key={i}>
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
    backgroundColor: 'lightgray',
  },
  card: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    position: 'absolute',
  },
  cardStyle: {
    borderColor: '#f0f0ff',
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
  },
  cardStatic: {
    position: 'relative',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    opacity: 0.6,
    height: 60,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  controlContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlContainerLeft: {
    borderTopRightRadius: 100,
    paddingRight: 30,
  },
  controlContainerRight: {
    borderTopLeftRadius: 100,
    paddingLeft: 30,
  },
}));

export default DeckWithControlls;
