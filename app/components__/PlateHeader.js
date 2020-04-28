import React, { useCallback } from 'react';
import { withStyles, Text } from '@ui-kitten/components';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SvgCat from './SvgCat';

const PlateHeaderContainer = ({
  opened,
  title,
  onTogglePress,
  children,
  withCat = false,
  headerContainerStyle,
  headerContainerOpenedStyle,
  catContainerStyle,
  themedStyle,
}) => {
  const handleToggle = useCallback(() => onTogglePress(), [onTogglePress]);
  const controls = Array.isArray(children) ? children : [children];
  return (
    <View
      style={[
        themedStyle.headerContainer,
        headerContainerStyle,
        opened && headerContainerOpenedStyle,
      ]}
    >
      <View style={themedStyle.headerText}>
        <Text category="h6">{title}</Text>
        {withCat && (
          <View style={[themedStyle.catContainer, catContainerStyle]}>
            <SvgCat />
          </View>
        )}
      </View>
      <View style={themedStyle.headerControls}>
        {controls.map((control, index) => (
          <View key={index} style={themedStyle.controlWrapper}>
            {control}
          </View>
        ))}
        <TouchableWithoutFeedback activeOpacity={1} onPress={handleToggle}>
          <View style={themedStyle.controlWrapper}>
            {
              <Ionicons
                name={`ios-arrow-${opened ? 'up' : 'down'}`}
                size={22}
                color="black"
              />
            }
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const PlateHeader = withStyles(PlateHeaderContainer, () => ({
  headerContainer: {
    flexDirection: 'row',
  },
  catContainer: {
    position: 'absolute',
    top: 31,
    left: 14,
  },
  headerText: {
    paddingLeft: 20,
    paddingBottom: 5,
    justifyContent: 'center',
    flex: 4,
  },
  headerControls: {
    flex: 2,
    flexDirection: 'row',
    paddingRight: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  controlWrapper: {
    width: 50,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  catContainerOpened: {
    display: 'none',
  },
}));

export default PlateHeader;
