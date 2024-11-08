import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const DiagnoseScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);

  // Función para elegir una imagen desde la galería
  const pickImage = async () => {
    // Pedir permisos para acceder a la galería
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Se necesitan permisos para acceder a las fotos');
      return;
    }

    // Seleccionar la imagen
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      // Simular un diagnóstico después de subir la imagen
      diagnosePlant(result.uri);
    }
  };

  // Función simulada para diagnosticar la planta
  const diagnosePlant = (imageUri) => {
    // Relleno en lo que llega la logica del api.
    // integrar una API de reconocimiento de imágenes en esta función.
    setDiagnosis('Esta es una planta suculenta. ¡Perfecta para interiores!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnóstico de Plantas</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>Sube una foto de la planta</Text>
      </TouchableOpacity>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      {diagnosis && (
        <View style={styles.diagnosisContainer}>
          <Text style={styles.diagnosisText}>{diagnosis}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#6bbd72',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  diagnosisContainer: {
    backgroundColor: '#e0f7df',
    padding: 15,
    borderRadius: 10,
  },
  diagnosisText: {
    fontSize: 18,
    color: '#388e3c',
  },
});

export default DiagnoseScreen;
