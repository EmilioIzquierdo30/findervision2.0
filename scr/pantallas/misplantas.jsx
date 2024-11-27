import React, { useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Card, Icon } from "react-native-elements";

const MyPlantsScreen = () => {
  const [plantsData, setPlantsData] = useState([
    {
      id: 1,
      name: "Suculenta",
      imageUri: "https://example.com/suculenta.jpg",
      description: "Una planta suculenta que almacena agua en sus hojas.",
    },
    {
      id: 2,
      name: "Cactus",
      imageUri: "https://example.com/cactus.jpg",
      description: "Un cactus que es fácil de cuidar y resistente.",
    },
    {
      id: 3,
      name: "Orquídea",
      imageUri: "https://example.com/orquidea.jpg",
      description: "Una orquídea tropical que florece con frecuencia.",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleDeletePlant = (plantId) => {
    setPlantsData((prevData) => prevData.filter((plant) => plant.id !== plantId));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Mostrar las plantas ya agregadas */}
      {plantsData.map((plant) => (
        <Card key={plant.id} containerStyle={styles.card}>
          {/* Botón "X" para eliminar en la esquina superior derecha */}
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeletePlant(plant.id)}
          >
            <Icon name="close" size={20} color="#998282" />
          </TouchableOpacity>

          <Card.Title>{plant.name || "Nombre por defecto"}</Card.Title>
          <Card.Divider />
          <View style={styles.cardContent}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: plant.imageUri || "https://example.com/defaultImage.jpg",
              }}
            />
            <Text style={styles.description}>{plant.description || "Descripción por defecto"}</Text>
          </View>
        </Card>
      ))}

      {/* Botón "Agregar Planta" para abrir el modal */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
          <Text style={styles.addButtonText}>Agregar Planta</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para seleccionar una planta */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona una Planta</Text>
            {/* Opciones de plantas */}
            <Text>Aquí puedes agregar opciones...</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
    position: "relative",
  },
  cardContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default MyPlantsScreen;
