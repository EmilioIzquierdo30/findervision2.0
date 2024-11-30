import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Card, Icon } from "react-native-elements";


const API_URL = "https://findervision2-0-2nxckh2g2-emilio-izquierdos-projects-b6e08b79.vercel.app/api/plantasagregar"; 

const MyPlantsScreen = () => {
  const [plantsData, setPlantsData] = useState([
    {
      id: 1,
      name: "Suculenta",
      imageUri: "https://www.hogarmania.com/archivos/202401/suculentas-caracteristicas-cuidados-1280x720x80xX.jpg",
      description: "Una planta suculenta que almacena agua en sus hojas.",
    },
    {
      id: 2,
      name: "Cactus",
      imageUri: "https://i0.wp.com/plantzone.in/wp-content/uploads/2024/08/Cactus-Plant.jpg?ssl=1",
      description: "Un cactus que es fácil de cuidar y resistente.",
    },
    {
      id: 3,
      name: "Orquídea",
      imageUri: "https://m.media-amazon.com/images/I/81vGQ9OxctL._AC_UF894,1000_QL80_.jpg",
      description: "Una orquídea tropical que florece con frecuencia.",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [apiPlants, setApiPlants] = useState([]); // Plantas cargadas desde la API

  // Fetch de plantas desde la API
  useEffect(() => {
    const fetchApiPlants = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setApiPlants(data); // Cargar las plantas desde la API
      } catch (error) {
        console.error("Error al cargar las plantas desde la API:", error);
      }
    };

    fetchApiPlants();
  }, []);

  // Agregar una planta seleccionada a la lista
  const handleAddPlant = (plant) => {
    setPlantsData((prevData) => [
      ...prevData,
      {
        id: plantsData.length + 1, // Generar un nuevo ID
        name: plant.nombre_cientifico, // Usar el nombre científico
        imageUri: plant.imagen || "https://example.com/defaultImage.jpg", // Imagen por defecto si no está disponible
        description: plant.descripcion || "Descripción no disponible.", // Descripción por defecto
      },
    ]);
    setModalVisible(false); // Cerrar el modal después de agregar
  };

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
            <Text style={styles.description}>
              {plant.description || "Descripción por defecto"}
            </Text>
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
            <FlatList
              data={apiPlants}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleAddPlant(item)} // Pasa todos los datos de la planta al agregar
                >
                  <Text style={styles.modalItemText}>{item.nombre_cientifico}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
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
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalItemText: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#FF0000",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MyPlantsScreen;
