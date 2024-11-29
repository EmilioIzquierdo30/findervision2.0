import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'; // Para hacer las solicitudes HTTP

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
      // Enviar la imagen seleccionada al servidor
      diagnosePlant(result.uri);
    }
  };

  // Función para diagnosticar la planta
  const diagnosePlant = async (imageUri) => {
    try {
      // Convertir la URI de la imagen a un formato compatible con FormData
      const formData = new FormData();
      const image = {
        uri: imageUri,
        type: 'image/jpeg',  // Cambiar dependiendo del tipo de imagen
        name: 'plant.jpg',   // Puedes cambiar el nombre de la imagen
      };
      formData.append('imageUri', image); // La imagen será enviada como un archivo

      // Realizar la solicitud POST al servidor local
      const response = await axios.post('http://localhost:3000/identificarplanta', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Procesar la respuesta del servidor
      const plantInfo = response.data;
      
      if (plantInfo.suggestions && plantInfo.suggestions.length > 0) {
        const plantName = plantInfo.suggestions[0].plant_name; // Nombre de la planta
        const plantConfidence = plantInfo.suggestions[0].probability * 100; // Confianza en el diagnóstico
        setDiagnosis(`Esta es una planta: ${plantName}. Confianza: ${plantConfidence.toFixed(2)}%`);
      } else {
        setDiagnosis('No se pudo identificar la planta.');
      }
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      setDiagnosis('Hubo un error al procesar la imagen');
    }
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
