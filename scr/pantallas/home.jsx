import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PlantPopup from "../componentes/popupplanta.jsx"; // Popup de planta
import PremiumPopup from "./premuim.jsx"; // Importa el modal Premium

const API_URL =
  "https://findervision2-0-2nxckh2g2-emilio-izquierdos-projects-b6e08b79.vercel.app/api/plantashome";

const HomeScreen = ({ navigation }) => {
  const [isPremiumVisible, setPremiumVisible] = useState(false); // Control del modal Premium
  const [isPlantPopupVisible, setPlantPopupVisible] = useState(false); // Control del popup de planta
  const [selectedPlant, setSelectedPlant] = useState(null); // Planta seleccionada para mostrar en el popup
  const [plants, setPlants] = useState([]); // Lista de plantas cargadas desde la API
  const [searchQuery, setSearchQuery] = useState(""); // Consulta de búsqueda
  const [isListCollapsed, setIsListCollapsed] = useState(true); // Estado para la lista colapsable

  // Fetch dinámico de las plantas desde la API
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPlants(data); // Actualizar el estado con las plantas obtenidas
      } catch (error) {
        console.error("Error al cargar las plantas:", error);
      }
    };

    fetchPlants();
  }, []);

  // Filtrar plantas basadas en la consulta de búsqueda
  const filteredPlants = plants.filter((plant) =>
    plant.nombre_cientifico.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para abrir el popup de planta
  const openPlantPopup = (plant) => {
    setSelectedPlant(plant);
    setPlantPopupVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Buscador */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar plantas"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon
          name="search-outline"
          size={24}
          color="#aaa"
          style={styles.searchIcon}
        />
      </View>

      {/* Notificación */}
      <TouchableOpacity
        style={styles.notification}
        onPress={() => setPremiumVisible(true)} // Abrir modal Premium
      >
        <Icon name="mail-outline" size={18} color="#fff" />
        <Text style={styles.notificationText}>
          Aún no has reclamado tu prueba de 7 días. Pulsa para reclamar.
        </Text>
      </TouchableOpacity>

      {/* Botones principales */}
      <View style={styles.mainButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Diagnóstico")}
        >
          <Icon name="medkit-outline" size={30} color="#4CAF50" />
          <Text style={styles.buttonText}>Diagnostique</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPremiumVisible(true)} // Abrir modal Premium
        >
          <Icon name="star-outline" size={30} color="#4CAF50" />
          <Text style={styles.buttonText}>Premium</Text>
        </TouchableOpacity>
      </View>

      {/* Lista colapsable */}
      <TouchableOpacity
        style={styles.collapseButton}
        onPress={() => setIsListCollapsed(!isListCollapsed)}
      >
        <Text style={styles.collapseButtonText}>
          {isListCollapsed ? "Mostrar todas las plantas" : "Ocultar lista"}
        </Text>
        <Icon
          name={isListCollapsed ? "chevron-down-outline" : "chevron-up-outline"}
          size={20}
          color="#4CAF50"
        />
      </TouchableOpacity>

      {!isListCollapsed && (
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.plantCard}
              onPress={() => openPlantPopup(item)}
            >
              <Image
                source={{
                  uri: item.imagen || "https://via.placeholder.com/150",
                }} // Imagen de la planta
                style={styles.plantImage}
              />
              <Text style={styles.plantTitle}>{item.nombre_cientifico}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.plantList}
        />
      )}

      {/* Modal Premium */}
      <PremiumPopup
        isVisible={isPremiumVisible}
        onClose={() => setPremiumVisible(false)}
      />

      {/* Popup para Planta */}
      {selectedPlant && (
        <PlantPopup
          isVisible={isPlantPopupVisible}
          onClose={() => setPlantPopupVisible(false)}
          plant={selectedPlant}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4f7" },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchInput: { flex: 1, fontSize: 16 },
  searchIcon: { marginLeft: 10 },
  notification: {
    backgroundColor: "#333",
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  notificationText: { color: "#fff", marginLeft: 10, flex: 1 },
  mainButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: 15,
  },
  button: { alignItems: "center", marginBottom: 15 },
  buttonText: { marginTop: 5, textAlign: "center" },
  collapseButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  collapseButtonText: {
    fontSize: 16,
    color: "#4CAF50",
    marginRight: 5,
  },
  plantList: { padding: 10 },
  plantCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  plantImage: { width: 50, height: 50, borderRadius: 5, marginRight: 10 },
  plantTitle: { fontSize: 16 },
});

export default HomeScreen;
