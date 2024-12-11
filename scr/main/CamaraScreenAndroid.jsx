import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";

const CameraScreenAndroid = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back || null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.error("Error solicitando permisos de cámara:", error);
        setHasPermission(false);
      }
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.message}>Solicitando permisos...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.message}>Acceso denegado a la cámara</Text>
      </View>
    );
  }

  const handleCapturePhoto = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync();
        Alert.alert("Foto tomada", `Guardada en: ${photo.uri}`);
      } catch (error) {
        console.error("Error tomando foto:", error);
        Alert.alert("Error", "No se pudo tomar la foto.");
      }
    }
  };

  return (
    <View style={styles.container}>
      {Camera && cameraType ? (
        <Camera
          style={styles.camera}
          type={cameraType}
          ref={(ref) => setCameraRef(ref)}
        />
      ) : (
        <Text style={styles.message}>Error cargando la cámara</Text>
      )}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            cameraType &&
            setCameraType((prevType) =>
              prevType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }
        >
          <Text style={styles.buttonText}>Cambiar Cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCapturePhoto}>
          <Text style={styles.buttonText}>Tomar Foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  message: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CameraScreenAndroid;
