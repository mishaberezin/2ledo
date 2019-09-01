import React, { Component } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { Animated } from 'react-native';

import COLORS from '../constants/colors';
import PlateHeader from './PlateHeader';

const INITIAL_HEIGHT = 55;

class PlateWithContenetContainer extends Component {
  constructor(props) {
    super(props);
    this.animatedHeight = new Animated.Value(INITIAL_HEIGHT);
    this.animatedOpacity = new Animated.Value(0);
    this.state = {
      opened: props.opened || false,
      height: INITIAL_HEIGHT,
      openedHeight: null,
    };
  }

  handleContentLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }) => {
    if (!this.state.openedHeight) {
      this.setState({
        openedHeight: INITIAL_HEIGHT + height + 40,
      });
    }
  };

  openPlate = () => {
    Animated.timing(this.animatedHeight, {
      toValue: this.state.openedHeight,
    }).start(() => {
      Animated.spring(this.animatedOpacity, {
        toValue: 1,
      }).start();
    });
  };

  closePlate = () => {
    this.animatedOpacity.setValue(0);
    Animated.timing(this.animatedHeight, {
      toValue: INITIAL_HEIGHT,
    }).start();
  };

  render() {
    const { title, children, themedStyle, contentStyle } = this.props;

    const { opened } = this.state;

    const handleToggle = () => {
      const { opened, openedHeight } = this.state;
      const newHeight = opened ? INITIAL_HEIGHT : openedHeight;
      this.setState({
        opened: !opened,
        height: newHeight,
      });
      opened ? this.closePlate() : this.openPlate();
    };

    const contentContainerStyle = [
      themedStyle.contentContainer,
      contentStyle,
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
        <Animated.View
          style={[contentContainerStyle, { opacity: this.animatedOpacity }]}
          onLayout={this.handleContentLayout}
        >
          {children}
        </Animated.View>
      </Animated.View>
    );
  }
}

const LIST_MARGIN = 10;

const PlateWithContenet = withStyles(PlateWithContenetContainer, () => ({
  container: {
    marginTop: 10,
    marginHorizontal: LIST_MARGIN,
    borderColor: COLORS.mainBackgroundColor,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: COLORS.mainBackgroundColor,
  },
  containerClosed: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  contentContainerOpened: {
    borderTopWidth: 1,
    borderColor: '#DADAF0',
  },
  // выравниваем заголовок в контейнере
  headerContainerStyle: {
    position: 'relative',
    top: 4,
    paddingHorizontal: 6,
  },
}));

export default PlateWithContenet;
