import React, { useCallback } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { ToledoButton } from '../../components/toledo-button';
import { withStyles, Text, Button } from "@ui-kitten/components";

import { OverflowMenu } from "@src/components";
import {
  CardItemLandmark,
  CardItemNumberOfRooms,
  CardItemHostAvatar,
} from "@src/components/card";

import { Ionicons } from "@expo/vector-icons";

const FavsListHostItemContainer = ({
  item,
  style,
  onPress,
  onDelete,
  eva: { style: themedStyle },
}) => {
  const {
    id,
    Photos: [firstPhoto],
    RentalPrice,
    Landmark,
    NumberOfRooms,
    HostUser,
  } = item;


  const menuItems = [
    { type: "view", title: "Просмотр" },
    { type: "delete", title: "Удалить" },
  ];

  const handleItemPress = useCallback(() => {
    onPress(id);
  }, [id, onPress]);

  const handleMenuItemPress = useCallback(
    ({ type }) => {
      if (type === "view") {
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
              style={themedStyle.imageRounded}
              source={firstPhoto}
            />
            <View style={themedStyle.avatarBlock}>
              <CardItemHostAvatar uri={HostUser.avatarUri} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={themedStyle.listItemInfoBlock}>
          <View style={themedStyle.listItemInfo}>
            <Text category="h5">{RentalPrice} ₽</Text>
            <CardItemNumberOfRooms value={NumberOfRooms} />
            <CardItemLandmark landmark={Landmark} />
          </View>

          <View style={themedStyle.callButton}>
            <ToledoButton>
              <Ionicons style={themedStyle.callButtonIcon} name="md-call" size={16} />
              <Text style={themedStyle.callButtonText} category="s3">   Готов обсудить</Text>
            </ToledoButton>
          </View>

        </View>

      </ScrollView>
    </View>
  );
};

export const FavsListHostItem = withStyles(FavsListHostItemContainer, () => ({
  listItemContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    minWidth: Dimensions.get("window").width,
  },
  listItemInfo: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
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
    flex: 1,
    maxWidth: Dimensions.get("window").width / 2,
  },
  listItemInfo: {
    paddingHorizontal: 10,
    minHeight: 102,
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
}));
