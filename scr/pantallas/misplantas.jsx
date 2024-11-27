import React, { useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet, Button, Modal, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

const MyPlantsScreen = () => {
  // Estado para controlar las plantas que ya están agregadas
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

  // Estado para controlar el modal de selección
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const availablePlants = [
    {
      id: 4,
      name: "Aloe Vera",
      imageUri: "https://example.com/aloevera.jpg",
      description: "Una planta conocida por sus propiedades curativas.",
    },
    {
      id: 5,
      name: "Lavanda",
      imageUri: "https://example.com/lavanda.jpg",
      description: "Planta aromática utilizada en aromaterapia.",
    },
    {
      id: 6,
      name: "Bambú",
      imageUri: "https://example.com/bambu.jpg",
      description: "Planta resistente y fácil de cuidar.",
    },
  ];

  // Función para agregar una planta seleccionada
  const handleAddSelectedPlant = () => {
    if (selectedPlant) {
      setPlantsData((prevData) => [
        ...prevData,
        { ...selectedPlant, id: prevData.length + 1 },
      ]);
      setSelectedPlant(null);
      setModalVisible(false);
    } else {
      alert("Por favor, seleccione una planta.");
    }
  };

  // Función para eliminar una planta
  const handleDeletePlant = (plantId) => {
    setPlantsData((prevData) => prevData.filter((plant) => plant.id !== plantId));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Mostrar las plantas ya agregadas */}
      {plantsData.map((plant) => (
        <Card key={plant.id} containerStyle={styles.card}>
          <Card.Title>{plant.name || "Nombre por defecto"}</Card.Title>
          <Card.Divider />
          <View style={styles.cardContent}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: plant.imageUri || "https://example.com/defaultImage.jpg", // Imagen por defecto
              }}
            />
            <Text style={styles.description}>{plant.description || "Descripción por defecto"}</Text>
          </View>
          {/* Botón para eliminar planta */}
          <Button
            title="Eliminar Planta"
            color="#FF0000"
            onPress={() => handleDeletePlant(plant.id)}
          />
        </Card>
      ))}

      {/* Botón "Agregar Planta" para abrir el modal */}
      <View style={styles.buttonContainer}>
        <Button title="Agregar Planta" onPress={() => setModalVisible(true)} />
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

            {/* Lista de plantas disponibles para seleccionar */}
            {availablePlants.map((plant) => (
              <TouchableOpacity
                key={plant.id}
                style={styles.plantOption}
                onPress={() => setSelectedPlant(plant)}
              >
                <Text style={styles.plantOptionText}>{plant.name}</Text>
                <Image style={styles.image} source={{ uri: plant.imageUri }} />
              </TouchableOpacity>
            ))}

            {/* Botones para cancelar o confirmar la selección */}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleAddSelectedPlant}>
                <Text style={styles.buttonText}>Agregar</Text>
              </TouchableOpacity>
            </View>
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
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro para el modal
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
  plantOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  plantOptionText: {
    fontSize: 16,
    marginRight: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default MyPlantsScreen;
