import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

function CameraButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: "95%",
    height: "95%",
    backgroundColor: "gray",
    borderRadius: 50,
  },
});

export default CameraButton;
