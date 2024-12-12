import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { APIURL, APIKEY } from '@env';
const DiagnoseScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Se necesitan permisos para acceder a las fotos');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true, // necesario para obtener base64 en Android/iOS
    });

    if (!result.canceled && result.assets?.length > 0) {
      const { uri, base64 } = result.assets[0];
      setSelectedImage(uri);

      if (base64) {
        sendToPlantId(base64);
      } else {
        console.log('No se pudo obtener la imagen en base64.');
        setDiagnosis('No se pudo obtener la imagen en base64');
      }
    } else {
      console.log('Selección de imagen cancelada.');
    }
  };

  const sendToPlantId = async (base64Image) => {
    try {
      const body = {
        api_key: APIKEY, // Utiliza la clave de la API desde el .env
        images: [`data:image/jpeg;base64,${base64Image}`],
        modifiers: ['crops_fast', 'similar_images'],
        plant_language: 'en',
        plant_details: [
          'common_names',
          'url',
          'name_authority',
          'wiki_description',
          'taxonomy',
          'synonyms',
        ],
      };

      const response = await fetch(APIURL, { // Utiliza la URL de la API desde el .env
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log('Respuesta de la API:', data);

      if (data.suggestions && data.suggestions.length > 0) {
        const plantName = data.suggestions[0].plant_name;
        const plantConfidence = data.suggestions[0].probability * 100;
        setDiagnosis(
          `Esta planta podría ser: ${plantName}. Confianza: ${plantConfidence.toFixed(2)}%`
        );
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
