import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const CameraScreenAndroid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Esto es para Android!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});

export default CameraScreenAndroid;
