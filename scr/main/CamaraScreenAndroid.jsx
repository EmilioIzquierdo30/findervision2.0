import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, View, Text, Alert, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { Camera, useCameraPermissions, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState(CameraType.back);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isTakingPicture, setIsTakingPicture] = useState(false);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  const handleTakePicture = async () => {
    if (cameraRef.current && !isTakingPicture) {
      setIsTakingPicture(true);
      try {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo) {
          Alert.alert("Foto tomada", `Guardada en: ${photo.uri}`);
        }
      } catch (error) {
        console.error("Error al tomar la foto:", error);
        Alert.alert("Error", "Hubo un problema al tomar la foto.");
      } finally {
        setIsTakingPicture(false);
      }
    }
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  if (!permission || permission.status !== "granted") {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.permissionMessage}>No tienes permisos para usar la cámara</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Solicitar Permiso</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={facing}
        ratio="16:9"
        onCameraReady={() => setIsCameraReady(true)}
      >
        {!isCameraReady && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6bbd72" />
            <Text style={styles.loadingText}>Cargando cámara...</Text>
          </View>
        )}

        {/* Marco de enfoque */}
        <View style={styles.focusFrame} />

        {/* Controles */}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton} onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlButton, styles.captureButton]}
            onPress={handleTakePicture}
            disabled={!isCameraReady || isTakingPicture}
          >
            <Ionicons name="camera-outline" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loadingText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
  },
  focusFrame: {
    position: "absolute",
    top: "30%",
    left: "15%",
    width: "70%",
    height: "40%",
    borderWidth: 3,
    borderColor: "#6bbd72",
    borderRadius: 10,
  },
  controls: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 20,
  },
  controlButton: {
    backgroundColor: "#6bbd72",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  captureButton: {
    backgroundColor: "#f50057",
    padding: 20,
  },
  permissionMessage: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: "#6bbd72",
    padding: 15,
    borderRadius: 10,
  },
  permissionButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
