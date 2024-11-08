import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlantPopup from '../componentes/popupplanta.jsx'; // Importamos el componente de popup

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Información de las plantas
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      imageUrl: "https://via.placeholder.com/150",
      medicinalUses: "Usada para el tratamiento de quemaduras, heridas y problemas de la piel.",
      link: "https://example.com/aloe-vera",
    },
    {
      id: 2,
      name: "Lavanda",
      imageUrl: "https://via.placeholder.com/150",
      medicinalUses: "Utilizada para reducir el estrés, la ansiedad y mejorar el sueño.",
      link: "https://example.com/lavanda",
    },
    // Agrega más plantas aquí según sea necesario
  ];

  // Función para abrir el popup con la información de la planta seleccionada
  const openPlantPopup = (plant) => {
    setSelectedPlant(plant);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Buscador */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar plantas"
          style={styles.searchInput}
        />
        <Icon name="search-outline" size={24} color="#aaa" style={styles.searchIcon} />
      </View>

      {/* Notificación */}
      <TouchableOpacity style={styles.notification}>
        <Icon name="mail-outline" size={18} color="#fff" />
        <Text style={styles.notificationText}>Aún no has reclamado tu prueba de 7 días. Pulsa para reclamar.</Text>
      </TouchableOpacity>

      {/* Botones principales */}
      <View style={styles.mainButtons}>
        <TouchableOpacity style={styles.button}>
          <Icon name="medkit-outline" size={30} color="#4CAF50" />
          <Text style={styles.buttonText}>Diagnostique</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="camera-outline" size={30} color="#4CAF50" />
          <Text style={styles.buttonText}>Identificar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="chatbubbles-outline" size={30} color="#4CAF50" />
          <Text style={styles.buttonText}>Asesor de Plantas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="star-outline" size={30} color="#4CAF50" />
          <Text style={styles.buttonText}>Premium</Text>
        </TouchableOpacity>
      </View>

      {/* Libros populares */}
      <Text style={styles.sectionTitle}>Libros populares</Text>
      <ScrollView horizontal style={styles.booksContainer}>
        <TouchableOpacity style={styles.bookCard}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.bookImage} />
          <Text style={styles.bookTitle}>La Flor de la Semana</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookCard}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.bookImage} />
          <Text style={styles.bookTitle}>Plantas Suculentas y Cactus</Text>
        </TouchableOpacity>
        {/* Agrega más tarjetas de libros según sea necesario */}
      </ScrollView>

      {/* Plantas populares */}
      <Text style={styles.sectionTitle}>Plantas populares</Text>
      <ScrollView horizontal style={styles.plantsContainer}>
        {plants.map((plant) => (
          <TouchableOpacity key={plant.id} style={styles.plantCard} onPress={() => openPlantPopup(plant)}>
            <Image source={{ uri: plant.imageUrl }} style={styles.plantImage} />
            <Text style={styles.plantTitle}>{plant.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popup de la planta seleccionada */}
      {selectedPlant && (
        <PlantPopup
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          plant={selectedPlant}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  notification: {
    backgroundColor: '#333',
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  mainButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 15,
  },
  button: {
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    marginTop: 5,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  booksContainer: {
    paddingHorizontal: 15,
  },
  bookCard: {
    width: 120,
    marginRight: 10,
  },
  bookImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 5,
    textAlign: 'center',
  },
  plantContainer: {
    paddingHorizontal: 15,
  },
  plantCard: {
    width: 120,
    marginRight: 10,
  },
  plantImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  plantTitle: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default HomeScreen;
