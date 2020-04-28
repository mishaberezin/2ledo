import React, { Component } from 'react';
import { withStyles } from '@ui-kitten/components';
import { Animated, View } from 'react-native';

import { MAIN_BACKGROUND_COLOR } from '@app/constants/colors';
import PlateHeader from './PlateHeader';

const INITIAL_HEIGHT = 55;

class PlateWithContentContainer extends Component {
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
        openedHeight: INITIAL_HEIGHT + height + 30,
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
    const {
      title,
      children,
      eva: { style: themedStyle },
      contentStyle,
      withCat,
    } = this.props;

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
          withCat={withCat}
          headerContainerStyle={themedStyle.headerContainerStyle}
          headerContainerOpenedStyle={themedStyle.headerContainerOpenedStyle}
          catContainerStyle={themedStyle.catContainerStyle}
        />
        <View style={contentContainerStyle} onLayout={this.handleContentLayout}>
          <Animated.View style={{ opacity: this.animatedOpacity }}>
            {children}
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

const LIST_MARGIN = 10;

const PlateWithContent = withStyles(PlateWithContentContainer, () => ({
  container: {
    marginVertical: 10,
    marginHorizontal: LIST_MARGIN,
    borderColor: MAIN_BACKGROUND_COLOR,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: MAIN_BACKGROUND_COLOR,
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
  headerContainerOpenedStyle: {
    paddingBottom: 7,
  },
  catContainerStyle: {
    top: 23,
    left: 16,
  },
}));

export default PlateWithContent;
