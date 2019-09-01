import React from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { View, FlatList } from 'react-native';
import COLORS from '../constants/colors';

const PlateWithListContainer = ({
  themedStyle,
  items,
  opened,
  renderItem,
  headerComponent,
  headerComponentStyle,
}) => {
  const contentContainerStyle = [
    themedStyle.listContainer,
    opened && themedStyle.listContainerOpened,
  ];

  return (
    <View
      style={[themedStyle.container, !opened && themedStyle.containerClosed]}
    >
      <FlatList
        keyExtractor={item => '' + item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
        ListHeaderComponentStyle={headerComponentStyle}
        contentContainerStyle={contentContainerStyle}
        data={opened ? items : []}
        renderItem={renderItem}
      />
    </View>
  );
};

const LIST_MARGIN = 10;

const PlateWithList = withStyles(PlateWithListContainer, () => ({
  container: {
    justifyContent: 'center',
    allignItems: 'center',
    marginVertical: 10,
  },
  containerClosed: {
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  listContainer: {
    backgroundColor: '#fff',
    borderColor: COLORS.mainBackgroundColor,
    borderWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: LIST_MARGIN,
    marginRight: LIST_MARGIN,
  },
  listContainerOpened: {
    paddingBottom: 20,
    backgroundColor: COLORS.mainBackgroundColor,
  },
}));

export default PlateWithList;
