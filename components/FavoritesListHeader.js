import React, { useCallback } from 'react';
import { Text, withStyles } from 'react-native-ui-kitten';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FavoritesListHeaderContainer = ({
  title,
  opened,
  onTogglePress,
  style,
  themedStyle,
}) => {
  const handleToggle = useCallback(onTogglePress, [opened]);

  return (
    <View style={[themedStyle.headerContainer, style]}>
      <View style={themedStyle.headerText}>
        <Text category="h6">{title}</Text>
      </View>
      <View style={themedStyle.headerControls}>
        <View style={themedStyle.controlWrapper}>
          <Ionicons
            style={themedStyle.iconMore}
            name="md-more"
            size={32}
            color="gray"
          />
        </View>
        <TouchableWithoutFeedback activeOpacity={1} onPress={handleToggle}>
          <View style={themedStyle.controlWrapper}>
            {
              <Ionicons
                name={opened ? 'ios-arrow-up' : 'ios-arrow-down'}
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

const FavoritesListHeader = withStyles(FavoritesListHeaderContainer, () => ({
  headerContainer: {
    flex: 1,
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
    paddingRight: 10,
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

export default FavoritesListHeader;
