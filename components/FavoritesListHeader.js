import React, { useCallback } from 'react';
import { Text, withStyles } from 'react-native-ui-kitten';
import { View } from 'react-native';
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
        <Ionicons name="md-more" size={32} color="gray" />
        {opened ? (
          <Ionicons
            style={themedStyle.iconToggle}
            name="ios-arrow-up"
            size={22}
            color="black"
            onPress={handleToggle}
          />
        ) : (
          <Ionicons
            style={themedStyle.iconToggle}
            name="ios-arrow-down"
            size={22}
            color="black"
            onPress={handleToggle}
          />
        )}
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
    flex: 5,
  },
  headerControls: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconToggle: {
    marginBottom: 5,
  },
}));

export default FavoritesListHeader;
