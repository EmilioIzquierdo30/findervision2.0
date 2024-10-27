import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MoreScreen = () => {
  // Datos de ejemplo para las opciones
  const options = [
    {
      id: 1,
      title: 'Perfil',
      icon: 'person-outline',
      onPress: () => alert('Navegar a Perfil'),
    },
    {
      id: 2,
      title: 'Configuraciones',
      icon: 'settings-outline',
      onPress: () => alert('Navegar a Configuraciones'),
    },
    {
      id: 3,
      title: 'Favoritos',
      icon: 'heart-outline',
      onPress: () => alert('Navegar a Favoritos'),
    },
    {
      id: 4,
      title: 'Notificaciones',
      icon: 'notifications-outline',
      onPress: () => alert('Navegar a Notificaciones'),
    },
    {
      id: 5,
      title: 'Ayuda y Soporte',
      icon: 'help-circle-outline',
      onPress: () => alert('Navegar a Ayuda y Soporte'),
    },
    {
      id: 6,
      title: 'Cerrar Sesión',
      icon: 'log-out-outline',
      onPress: () => alert('Cerrar Sesión'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={option.onPress}
        >
          <Ionicons name={option.icon} size={24} color="#555" style={styles.icon} />
          <Text style={styles.optionText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MoreScreen;
