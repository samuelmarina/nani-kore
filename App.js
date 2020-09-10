import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./app/components/AppText";
import MainScreen from "./app/screens/MainScreen";
import LanguageTexts from "./app/components/LanguageTexts";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
});
