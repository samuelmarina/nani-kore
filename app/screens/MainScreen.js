import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";
import Constants from "expo-constants";
import * as Speech from "expo-speech";

import useCamera from "../hooks/useCamera";
import AppText from "../components/AppText";
import LanguageTexts from "../components/LanguageTexts";
import CameraButton from "../components/CameraButton";
import IconButton from "../components/IconButton";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import translationApi from "../api/translation";

function MainScreen(props) {
  const { hasPermission } = useCamera();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [word, setWord] = useState("How are you?");
  const [translatedWord, setTranslatedWord] = useState("お元気ですか？");

  const getTranslationApi = useApi(translationApi.getTranslation);

  const translate = async () => {
    const data = new FormData();
    data.append("q", word);
    data.append("langpair", "en|ja");
    await getTranslationApi.request({ q: word, langpair: "en|ja" });
    console.log(getTranslationApi.data.responseData.translatedText);
  };

  if (!hasPermission) {
    return <AppText>No camera permission</AppText>;
  }

  const handleReverse = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const speakJapanese = () => {
    Speech.stop();
    Speech.speak(word, { language: "ja" });
  };

  const speakMainLanguage = () => {
    Speech.stop();
    Speech.speak(word, { language: "en" });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.firstLanguage}>
          <LanguageTexts
            language="English"
            translation={word}
            onPress={translate}
          />
        </View>
        <View style={styles.secondLanguage}>
          <LanguageTexts
            language="Japanese"
            translation={translatedWord}
            onPress={speakJapanese}
          />
        </View>
        <View style={styles.cameraButton}>
          <CameraButton />
        </View>
        <View style={styles.reverse}>
          <IconButton
            name="ios-reverse-camera"
            backgroundColor="transparent"
            iconColor={colors.primary}
            size={50}
            onPress={() => handleReverse()}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
  },
  firstLanguage: {
    position: "absolute",
    top: Constants.statusBarHeight + 40,
  },
  reverse: {
    position: "absolute",
    bottom: 45,
    right: 20,
  },
  secondLanguage: {
    position: "absolute",
    bottom: 150,
  },
});

export default MainScreen;
