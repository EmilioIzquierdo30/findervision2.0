import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Modal from "react-native-modal";

const LibroPopup = ({ isVisible, onClose, libro }) => {
  const { imageUrlplant, autor, descripsion, link } = libro;

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} animationIn="zoomIn" animationOut="zoomOut">
      <View style={styles.container}>
        {/* Imagen del libro */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrlplant }} style={styles.image} />
        </View>

        {/* Información de la planta */}
        <Text style={styles.autor}>{autor}</Text>
        <Text style={styles.descripsion}>{descripsion}</Text>

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

export default LibroPopup;
