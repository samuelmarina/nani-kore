import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function LanguageTexts({ language, translation, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <AppText style={styles.translation}>{translation}</AppText>
      </TouchableWithoutFeedback>
      <AppText style={styles.language}>{language}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  language: {
    color: colors.secondary,
    fontSize: 30,
    textDecorationLine: "underline",
  },
  translation: {
    fontWeight: "bold",
  },
});

export default LanguageTexts;
