import React from "react";
import { StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";

function MainScreen(props) {
  const [type, setType] = useState(Camera.Constants.Type.back);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}></Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});

export default MainScreen;
