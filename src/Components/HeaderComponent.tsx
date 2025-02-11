import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
interface IHeaderParams {
  goToPrevios?: () => void;
  search?: () => void;
  cartLength?: number;
  gotoCartScreen?: () => void;
}

export const HeadersComponent = ({
  goToPrevios,
  search,
  cartLength,
  gotoCartScreen,
}: IHeaderParams) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View
      style={{
        backgroundColor: "#000",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 7,
          gap: 10,
          backgroundColor: "white",
          borderRadius: 10,
          height: 38,
          flex: 1,
        }}
      >
        <AntDesign name="search1" size={20} color={"blue"} />
      </Pressable>
      <TextInput
        value={searchInput}
        onChangeText={setSearchInput}
        placeholder="search Items ..."
      />
    </View>
  );
};
