import React, { useCallback } from 'react';
import { View } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { PlateHeader, OverflowMenu } from '@src/components';

const FavsListHeaderContainer = ({
  title,
  opened,
  onTogglePress,
  withCat,
  eva: { style: themedStyle },
}) => {
  const handleToggle = useCallback(onTogglePress, [opened]);

  return (
    <PlateHeader
      opened={opened}
      title={title}
      onTogglePress={handleToggle}
      withCat={withCat}
    >
      {/* <OverflowMenu>
        <View style={themedStyle.iconMore}>
          <Ionicons name="md-more" size={32} color="gray" />
        </View>
      </OverflowMenu> */}
    </PlateHeader>
  );
};

export const FavsListHeader = withStyles(FavsListHeaderContainer, () => ({
  iconMore: {
    display: 'flex',
    alignItems: 'center',
    width: 40,
  },
  overflowMenu: {
    position: 'relative',
    top: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
}));
