import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Modal from "react-native-modal";

const PlantPopup = ({ isVisible, onClose, plant }) => {
  const { imageUrl, names, medicinalUses, link } = plant;

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} animationIn="zoomIn" animationOut="zoomOut">
      <View style={styles.container}>
        {/* Imagen de la planta */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>

        {/* Información de la planta */}
        <Text style={styles.names}>{names}</Text>
        <Text style={styles.medicinalUses}>{medicinalUses}</Text>

        {/* Botón para ir al enlace */}
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(link)}>
          <Text style={styles.buttonText}>Ver Más</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  names: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  medicinalUses: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PlantPopup;
