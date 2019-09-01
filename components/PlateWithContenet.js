import React, { useCallback, useState } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { View } from 'react-native';

import COLORS from '../constants/colors';
import PlateHeader from './PlateHeader';

const PlateWithContenetContainer = ({
  opened,
  title,
  children,
  themedStyle,
}) => {
  const [isOpened, setOpened] = useState(opened);

  const handleToggle = useCallback(() => setOpened(!isOpened), [isOpened]);

  const contentContainerStyle = [
    themedStyle.contentContainer,
    isOpened && themedStyle.contentContainerOpened,
  ];

  return (
    <View
      style={[themedStyle.container, !isOpened && themedStyle.containerClosed]}
    >
      <PlateHeader
        opened={isOpened}
        title={title}
        onTogglePress={handleToggle}
        headerContainerStyle={themedStyle.headerContainerStyle}
      />
      <View style={contentContainerStyle}>{children}</View>
    </View>
  );
};

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
  },
  containerClosed: {
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    height: 55,
    backgroundColor: '#fff',
  },
  contentContainer: {
    height: 0,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  contentContainerOpened: {
    height: 'auto',
    borderTopWidth: 1,
    borderColor: '#DADAF0',
  },
  headerContainerStyle: {
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
}));

export default PlateWithContenet;
