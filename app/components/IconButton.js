import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({
  backgroundColor = "#000",
  iconColor = "#fff",
  name,
  onPress,
  size = 40,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
      onPress={onPress}
    >
      <Ionicons name={name} size={size} color={iconColor} />
    </TouchableOpacity>
  );
}

export default IconButton;
