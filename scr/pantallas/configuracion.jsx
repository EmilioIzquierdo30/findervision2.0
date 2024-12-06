import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfiguracionesScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el modo oscuro
  const [notificationsEnabled, setNotificationsEnabled] = useState(true); // Estado para notificaciones

  // Cargar configuraciones al inicio
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const darkMode = await AsyncStorage.getItem("isDarkMode");
        const notifications = await AsyncStorage.getItem("notificationsEnabled");
        if (darkMode !== null) setIsDarkMode(JSON.parse(darkMode));
        if (notifications !== null) setNotificationsEnabled(JSON.parse(notifications));
      } catch (error) {
        console.error("Error al cargar configuraciones:", error);
      }
    };

    loadSettings();
  }, []);

  // Guardar configuraciones
  const saveSetting = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error al guardar configuración:", error);
    }
  };

  // Cambiar estado del modo oscuro
  const toggleDarkMode = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    saveSetting("isDarkMode", newValue);
  };

  // Cambiar estado de notificaciones
  const toggleNotifications = () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    saveSetting("notificationsEnabled", newValue);
  };

  // Restablecer configuraciones
  const resetSettings = async () => {
    try {
      await AsyncStorage.clear();
      setIsDarkMode(false);
      setNotificationsEnabled(true);
      Alert.alert("Restablecido", "Se han restablecido las configuraciones.");
    } catch (error) {
      console.error("Error al restablecer configuraciones:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>

      {/* Configuración de Modo Oscuro */}
      <View style={styles.setting}>
        <Text style={styles.settingText}>Modo Oscuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#ccc", true: "#4CAF50" }}
          thumbColor={isDarkMode ? "#4CAF50" : "#f4f3f4"}
        />
      </View>

      {/* Configuración de Notificaciones */}
      <View style={styles.setting}>
        <Text style={styles.settingText}>Habilitar Notificaciones</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: "#ccc", true: "#4CAF50" }}
          thumbColor={notificationsEnabled ? "#4CAF50" : "#f4f3f4"}
        />
      </View>

      {/* Botón para restablecer configuraciones */}
      <TouchableOpacity style={styles.resetButton} onPress={resetSettings}>
        <Text style={styles.resetButtonText}>Restablecer Configuraciones</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingText: {
    fontSize: 16,
    color: "#333",
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ConfiguracionesScreen;
