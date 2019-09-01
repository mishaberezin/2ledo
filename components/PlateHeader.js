import React, { useCallback } from 'react';
import { withStyles, Text } from 'react-native-ui-kitten';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlateHeaderContainer = ({
  opened,
  title,
  onTogglePress,
  children,
  themedStyle,
  headerContainerStyle,
}) => {
  const handleToggle = useCallback(() => onTogglePress(), [onTogglePress]);
  const controls = Array.isArray(children) ? children : [children];
  return (
    <View style={[themedStyle.headerContainer, headerContainerStyle]}>
      <View style={themedStyle.headerText}>
        <Text category="h6">{title}</Text>
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
  headerText: {
    paddingLeft: 20,
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
}));

export default PlateHeader;
