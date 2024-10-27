import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const MyPlantsScreen = () => {
  // Datos de ejemplo para las plantas
  const plantsData = [
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
    //  agregar más datos aquí
  ];

  return (
    <ScrollView style={styles.container}>
      {plantsData.map((plant) => (
        <Card key={plant.id} containerStyle={styles.card} wrapperStyle={{}}>
          <Card.Title>{plant.name}</Card.Title>
          <Card.Divider />
          <View style={styles.cardContent}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: plant.imageUri,
              }}
            />
            <Text style={styles.description}>{plant.description}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  card: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
  },
  cardContent: {
    position: "relative",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});

export default MyPlantsScreen;
