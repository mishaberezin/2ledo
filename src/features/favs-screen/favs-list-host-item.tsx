import React, { useCallback } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { ToledoButton } from '../../components/toledo-button';
import { useStyleSheet, StyleService, Text, Button } from "@ui-kitten/components";

import {
  CardItemLandmark,
  CardItemNumberOfRooms,
  CardItemHostAvatar,
} from "@src/components/card";
import { ApartmentData } from "@src/redux/slices/favorites-slice";

import { Ionicons } from "@expo/vector-icons";

type FavsListHostItemContainerProps = {
  itemId: string,
  item: ApartmentData,
  style: object,
  onPress: (itemId: string) => {},
  onDelete: () => {},
  eva: any
};

export const FavsListHostItem = ({
  itemId,
  item,
  style,
  onPress,
  onDelete
}: FavsListHostItemContainerProps) => {

  const {
    // title,
    // description,
    rentalPrice,
    roomsCount,
    floor,
    photos,
    address,
  } = item;

  const styles = useStyleSheet(themedStyle);
  // const menuItems = [
  //   { type: "view", title: "Просмотр" },
  //   { type: "delete", title: "Удалить" },
  // ];

  const handleItemPress = useCallback(() => {
    onPress(itemId);
  }, [itemId, onPress]);

  const [firstPhoto] = photos;

  // const handleMenuItemPress = useCallback(
  //   ({ type }) => {
  //     if (type === "view") {
  //       onPress(id);
  //     } else {
  //       onDelete(id);
  //     }
  //   },
  //   [id, onPress, onDelete]
  // );

  return (
    <View style={[style, styles.listItemContainer]}>
      <ScrollView
        style={styles.listItemInfo}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <View style={styles.listItemInfoBlock}>
          <TouchableOpacity onPress={handleItemPress}>
            {firstPhoto && (<Image style={styles.imageRounded} source={firstPhoto} />)}
          </TouchableOpacity>
        </View>

        <View style={styles.listItemInfoBlock}>
          <View style={styles.listItemInfo}>
            <View style={[styles.infoRow, styles.priceRow]}>
              <Text category="h5">{rentalPrice} ₽</Text>
            </View>

            <View style={styles.infoRow}>
              <CardItemNumberOfRooms value={roomsCount} />
            </View>

            <View style={styles.infoRow}>
              <Text category="p2">{floor} этаж</Text>
            </View>

            <Text category="p2">{address.oneLine}</Text>
          </View>

          <View style={styles.callButton}>
            <ToledoButton>
              <Ionicons style={styles.callButtonIcon} name="md-call" size={16} />
              <Text style={styles.callButtonText} category="s3">   Готов обсудить</Text>
            </ToledoButton>
          </View>

        </View>

      </ScrollView>
    </View>
  );
};

const themedStyle = StyleService.create({
  listItemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    minWidth: Dimensions.get("window").width,
  },
  listItemInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    minHeight: 20,
  },
  avatarBlock: {
    position: "absolute",
    top: 5,
    left: 112,
  },
  imageRounded: {
    width: 158,
    height: 158,
    borderRadius: 10,
    borderColor: "#f0f0ff",
    borderWidth: 1,
  },
  listItemInfoBlock: {
    padding: 5,
    maxWidth: Dimensions.get("window").width / 2,
  },
  listItemActions: {
    marginLeft: 10,
    minWidth: 15,
    paddingVertical: 5,
  },
  infoRow: {
    paddingBottom: 5,
    width: '100%',
  },
  priceRow: {
    paddingBottom: 15,
  },
  menuStyle: {
    //position: 'relative',
  },
  iconMore: {
    display: "flex",
    alignItems: "center",
    width: 40,
  },
  callButton: {
    paddingTop: 10,
    width: 150,
  },
  callButtonText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
    padding: 100,
  }
});
