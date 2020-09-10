import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";
import Constants from "expo-constants";
import * as Speech from "expo-speech";
import LottieView from "lottie-react-native";

import AppText from "../components/AppText";
import CameraButton from "../components/CameraButton";
import colors from "../config/colors";
import IconButton from "../components/IconButton";
import LanguageTexts from "../components/LanguageTexts";
import useCamera from "../hooks/useCamera";
import useImageRecognition from "../hooks/useImageRecognition";

function MainScreen(props) {
  const { hasPermission } = useCamera();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [word, setWord] = useState("What is this?");
  const [translatedWord, setTranslatedWord] = useState("何これ？");
  const { loading, getWords } = useImageRecognition();

  let camera;

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
    Speech.speak(translatedWord, { language: "ja" });
  };

  const speakMainLanguage = () => {
    Speech.stop();
    Speech.speak(word, { language: "en" });
  };

  const takePicture = async () => {
    if (camera) {
      const picture = await camera.takePictureAsync({ base64: true });
      const base64 = picture.base64;
      handleLoading(base64);
    }
  };

  const handleLoading = async (base64) => {
    const response = await getWords(base64);
    if (response !== null) {
      setWord(response.word);
      setTranslatedWord(response.translatedWord);
      return;
    }
    console.log("Error");
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => (camera = ref)}>
        {loading ? (
          <LottieView
            autoPlay
            loop
            source={require("../assets/animations/loadingLottie.json")}
          />
        ) : (
          <>
            <View style={styles.firstLanguage}>
              <LanguageTexts
                language="English"
                translation={word}
                onPress={speakMainLanguage}
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
              <CameraButton onPress={takePicture} />
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
          </>
        )}
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
