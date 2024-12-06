import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const PerfilScreen = () => {
  // Simulación de datos
  const [posts, setPosts] = useState([
    { id: "1", image: "https://via.placeholder.com/150" },
    { id: "2", image: "https://via.placeholder.com/150" },
    { id: "3", image: "https://via.placeholder.com/150" },
    { id: "4", image: "https://via.placeholder.com/150" },
    { id: "5", image: "https://via.placeholder.com/150" },
    { id: "6", image: "https://via.placeholder.com/150" },
  ]);

  return (
    <View style={styles.container}>
      {/* Encabezado del perfil */}
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://via.placeholder.com/150",
          }}
        />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Publicaciones</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1,256</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>200</Text>
            <Text style={styles.statLabel}>Siguiendo</Text>
          </View>
        </View>
      </View>

      {/* Información del perfil */}
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Nombre de Usuario</Text>
        <Text style={styles.profileBio}>
          🌿 Amante de las plantas | Explorador de naturaleza 🌱{"\n"}
          📍 Basado en México
        </Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Publicaciones (cuadrícula) */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}
        contentContainerStyle={styles.postsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  statsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 20,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  profileInfo: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileBio: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
    lineHeight: 20,
  },
  editButton: {
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  postsContainer: {
    paddingHorizontal: 1,
    paddingTop: 10,
  },
  postImage: {
    width: windowWidth / 3 - 2,
    height: windowWidth / 3 - 2,
    margin: 1,
  },
});

export default PerfilScreen;
