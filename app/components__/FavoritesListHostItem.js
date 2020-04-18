import React, { useCallback } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { withStyles, Text } from 'react-native-ui-kitten';
import OverflowMenu from './OverflowMenu';
import {
  CardItemLandmark,
  CardItemNumberOfRooms,
  CardItemHostAvatar,
} from '../components/Card';

import { Ionicons } from '@expo/vector-icons';

const FavoritesListHostItemContainer = ({
  item,
  style,
  onPress,
  onDelete,
  themedStyle,
}) => {
  const {
    id,
    Photos: [firstPhoto],
    RentalPrice,
    Address: { postal },
    Landmark,
    NumberOfRooms,
    HostUser,
  } = item;

  const menuItems = [
    { type: 'view', title: 'Просмотр' },
    { type: 'delete', title: 'Удалить' },
  ];

  const handleItemPress = useCallback(() => {
    onPress(id);
  }, [id, onPress]);

  const handleMenuItemPress = useCallback(
    ({ type }) => {
      if (type === 'view') {
        onPress(id);
      } else {
        onDelete(id);
      }
    },
    [id, onPress, onDelete]
  );

  return (
    <View style={[style, themedStyle.listItemContainer]}>
      <ScrollView
        style={themedStyle.listItemInfo}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <View style={themedStyle.listItemInfoBlock}>
          <TouchableOpacity onPress={handleItemPress}>
            <Image
              source={{ firstPhoto }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        </View>

        <View style={themedStyle.listItemInfoBlock}>
          <Text category="h5">{RentalPrice} Р</Text>
          <CardItemHostAvatar uri={HostUser.avatarUri} />
        </View>

        <View style={themedStyle.listItemInfoBlock}>
          <CardItemNumberOfRooms value={NumberOfRooms} />
          <CardItemLandmark landmark={Landmark} />
        </View>
      </ScrollView>
      <View style={themedStyle.listItemBottomBlock}>
        <View style={themedStyle.listItemBottomTextBlock}>
          <Text category="p2">{postal}</Text>
        </View>

        <View style={themedStyle.listItemActions}>
          <OverflowMenu
            items={menuItems}
            menuContainerStyle={themedStyle.menuStyle}
            onItemPress={handleMenuItemPress}
          >
            <View style={themedStyle.iconMore}>
              <Ionicons name="md-more" size={32} color="gray" />
            </View>
          </OverflowMenu>
        </View>
      </View>
    </View>
  );
};

const FavoritesListHostItem = withStyles(
  FavoritesListHostItemContainer,
  () => ({
    listItemContainer: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
      minWidth: Dimensions.get('window').width,
    },
    listItemInfo: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    listItemInfoBlock: {
      padding: 5,
      flex: 1,
      minWidth: Dimensions.get('window').width / 3,
    },
    listItemBottomBlock: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    listItemBottomTextBlock: {
      flex: 3,
      paddingHorizontal: 5,
      paddingVertical: 10,
    },
    listItemActions: {
      marginLeft: 10,
      minWidth: 15,
      paddingVertical: 5,
    },
    menuStyle: {
      //position: 'relative',
    },
    iconMore: {
      display: 'flex',
      alignItems: 'center',
      width: 40,
    },
  })
);

export default FavoritesListHostItem;
