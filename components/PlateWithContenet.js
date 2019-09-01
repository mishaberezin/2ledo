import React, { Component } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { View, Animated } from 'react-native';

import COLORS from '../constants/colors';
import PlateHeader from './PlateHeader';

const INITIAL_HEIGHT = 55;
const CONTENET_CONTAINER_PADDING = 20; // костыль

class PlateWithContenetContainer extends Component {
  constructor(props) {
    super(props);
    this.animatedHeight = new Animated.Value(INITIAL_HEIGHT);
    this.state = {
      opened: props.opened || false,
      height: INITIAL_HEIGHT,
      openedHeight: null,
    };
  }

  handleContentLayout = ({
    nativeEvent: {
      layout: { height: contentHeight },
    },
  }) => {
    if (!this.state.openedHeight) {
      this.setState({
        openedHeight:
          INITIAL_HEIGHT + contentHeight + CONTENET_CONTAINER_PADDING + 5,
      });
    }
  };

  render() {
    const { title, children, themedStyle } = this.props;

    const { opened } = this.state;

    const handleToggle = () => {
      const { height, openedHeight } = this.state;

      const newHeight =
        height === INITIAL_HEIGHT ? openedHeight : INITIAL_HEIGHT;

      this.setState({
        opened: !opened,
        height: newHeight,
      });

      Animated.spring(this.animatedHeight, {
        toValue: newHeight,
      }).start();
    };

    const contentContainerStyle = [
      themedStyle.contentContainer,
      opened && themedStyle.contentContainerOpened,
    ];

    return (
      <Animated.View
        style={[
          themedStyle.container,
          !opened && themedStyle.containerClosed,
          { height: this.animatedHeight },
        ]}
      >
        <PlateHeader
          opened={opened}
          title={title}
          onTogglePress={handleToggle}
          headerContainerStyle={themedStyle.headerContainerStyle}
        />
        <View style={contentContainerStyle} onLayout={this.handleContentLayout}>
          {children}
        </View>
      </Animated.View>
    );
  }
}

const LIST_MARGIN = 10;

const PlateWithContenet = withStyles(PlateWithContenetContainer, () => ({
  container: {
    justifyContent: 'flex-start',
    allignItems: 'center',
    marginVertical: 10,
    marginHorizontal: LIST_MARGIN,
    borderColor: COLORS.mainBackgroundColor,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: COLORS.mainBackgroundColor,
    overflow: 'hidden',
  },
  containerClosed: {
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: CONTENET_CONTAINER_PADDING,
    paddingHorizontal: 25,
  },
  contentContainerOpened: {
    borderTopWidth: 1,
    borderColor: '#DADAF0',
  },
  headerContainerStyle: {
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
}));

export default PlateWithContenet;
