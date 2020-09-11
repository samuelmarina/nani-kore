import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Platform } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={
          Platform.OS === "android"
            ? require("../assets/animations/loaderAndroid.json")
            : require("../assets/animations/loaderiOS.json")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "transparent",
    height: "100%",
    // opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
