import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const NotificacionesScreen = () => {
  const [notifications, setNotifications] = useState([]);

  // Cargar notificaciones al inicio
  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const storedNotifications = await AsyncStorage.getItem("notifications");
        if (storedNotifications) {
          setNotifications(JSON.parse(storedNotifications));
        } else {
          // Si no hay notificaciones almacenadas, inicializar con datos de ejemplo
          const initialNotifications = [
            {
              id: "1",
              title: "Prueba Premium",
              message: "Activa tu prueba Premium gratis por 7 días.",
              date: "2024-12-05",
            },
            {
              id: "2",
              title: "Nueva Planta Disponible",
              message: "Se ha agregado la planta Aloe Vera a la base de datos.",
              date: "2024-12-04",
            },
            {
              id: "3",
              title: "Actualización de la App",
              message: "La aplicación se actualizó a la versión 2.0. ¡Descárgala ahora!",
              date: "2024-12-03",
            },
          ];
          await AsyncStorage.setItem("notifications", JSON.stringify(initialNotifications));
          setNotifications(initialNotifications);
        }
      } catch (error) {
        console.error("Error al cargar notificaciones:", error);
      }
    };

    loadNotifications();
  }, []);

  // Eliminar notificación
  const handleDeleteNotification = async (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
    await AsyncStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    Alert.alert("Notificación eliminada");
  };

  // Renderizar una notificación
  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteNotification(item.id)}
      >
        <Ionicons name="trash-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="notifications-off-outline" size={50} color="#aaa" />
          <Text style={styles.emptyText}>No hay notificaciones</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationContent: {
    flex: 1,
    marginRight: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  notificationDate: {
    fontSize: 12,
    color: "#aaa",
  },
  deleteButton: {
    backgroundColor: "#E74C3C",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 10,
  },
});

export default NotificacionesScreen;
