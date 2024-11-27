import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, ScrollView, Modal, Button, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);

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

  const handleRegister = () => {
    if (!email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    if (!isChecked) {
      alert('Debes aceptar los términos y condiciones para registrarte.');
      return;
    }
    setUserInfo({ email });
    setCurrentScreen('Home');
  };

  if (currentScreen === 'Login') {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
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
        <TouchableOpacity style={styles.loginButton} onPress={() => setCurrentScreen('Register')}>
          <Text style={styles.loginButtonText}>Regístrate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
          <AntDesign name="google" size={24} color="white" />
          <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          Al continuar, aceptas nuestros{' '}
          <Text style={styles.link} onPress={() => setTermsVisible(true)}>
            Términos y Condiciones
          </Text>.
        </Text>
        <Modal visible={termsVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <ScrollView>
              <Text style={styles.modalTitle}>Términos y Condiciones</Text>
              <Text style={styles.modalText}>
                Aquí van los términos y condiciones detallados de tu aplicación...
              </Text>
            </ScrollView>
            <Button title="Cerrar" onPress={() => setTermsVisible(false)} />
          </View>
        </Modal>
      </View>
    );
  }

  if (currentScreen === 'Register') {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>Registro</Text>
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
        <View style={styles.checkboxContainer}>
          <CheckBox value={isChecked} onValueChange={setIsChecked} />
          <Text style={styles.checkboxText}>
            Acepto los{' '}
            <Text style={styles.link} onPress={() => setTermsVisible(true)}>
              Términos y Condiciones
            </Text>.
          </Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Registrarse</Text>
        </TouchableOpacity>
        <Modal visible={termsVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <ScrollView>
              <Text style={styles.modalTitle}>Términos y Condiciones</Text>
              <Text style={styles.modalText}>
                Aquí van los términos y condiciones detallados de tu aplicación...
              </Text>
            </ScrollView>
            <Button title="Cerrar" onPress={() => setTermsVisible(false)} />
          </View>
        </Modal>
      </View>
    );
  }

  if (currentScreen === 'Home') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido, {userInfo?.email || 'Usuario'}</Text>
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
    width: 120,
    height: 120,
    marginBottom: 20,
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
  termsText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
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
