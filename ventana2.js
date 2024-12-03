import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function HomeScreen({ userInfo, setScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {userInfo?.name || 'Usuario'}</Text>
      <Text>Email: {userInfo?.email || 'No disponible'}</Text>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setScreen('Login')}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3D9A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
