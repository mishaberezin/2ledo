import React, { useCallback, useState } from 'react';
import { withStyles, Text } from 'react-native-ui-kitten';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

const PlateWithContenetContainer = ({ themedStyle, opened, children }) => {
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
      <View style={themedStyle.contentHeaderStyle}>
        <View style={themedStyle.headerText}>
          <Text category="h6">Привет</Text>
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
            <View
              style={[
                themedStyle.controlWrapper,
                isOpened && themedStyle.controlWrapperOpened,
              ]}
            >
              {
                <Ionicons
                  name={isOpened ? 'ios-arrow-up' : 'ios-arrow-down'}
                  size={22}
                  color="black"
                />
              }
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
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
    borderColor: COLORS.mainBackgroundColor,
    borderWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: LIST_MARGIN,
    marginRight: LIST_MARGIN,
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
    padding: 20,
  },
  contentContainerOpened: {
    height: 'auto',
    borderTopWidth: 1,
    borderColor: '#DADAF0',
  },
  contentHeaderStyle: {
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
  controlWrapperOpened: {
    paddingBottom: 15,
  },
}));

export default PlateWithContenet;
