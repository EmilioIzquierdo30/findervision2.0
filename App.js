import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AntDesign } from '@expo/vector-icons'; // Para el ícono de Google

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  // Google Auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '198114410227-glr0q69n847lfjtcu3a288raj42lnuak.apps.googleusercontent.com',
    iosClientId: '198114410227-k1u5vssjlbukfia8r9o1c1ib0hrau1nl.apps.googleusercontent.com',
    webClientId: '198114410227-fmcs43vnujen8qnnhda807mi7a0qg04g.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      fetchUserInfo(authentication.accessToken);
    }
  }, [response]);

  async function fetchUserInfo(accessToken) {
    try {
      const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userData = await res.json();
      setUserInfo(userData);
      setCurrentScreen('Home');
    } catch (error) {
      console.error('Error fetching user info: ', error);
    }
  }

  const handleLogin = () => {
    if (email && password) {
      setUserInfo({ name: 'Usuario', email });
      setCurrentScreen('Home');
    } else {
      alert('Por favor, ingresa correo y contraseña.');
    }
  };

  if (currentScreen === 'Login') {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/Logo.png')} // Ruta local del logo
          style={styles.logo}
        />
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
          <AntDesign name="google" size={24} color="white" />
          <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentScreen === 'Home') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido, {userInfo?.name || 'Usuario'}</Text>
        <Text>Email: {userInfo?.email || 'No disponible'}</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => setCurrentScreen('Login')}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3D9A5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120, // Ancho del logo
    height: 120, // Altura del logo
    marginBottom: 20, // Espacio debajo del logo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DB4437',
    padding: 10,
    borderRadius: 5,
  },
  googleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
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
