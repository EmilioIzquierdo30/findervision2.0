import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';


export default function LoginScreen({ setScreen, setUserInfo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      setScreen('Home');
    } catch (error) {
      console.error('Error fetching user info: ', error);
    }
  }

  const handleLogin = () => {
    if (email && password) {
      setUserInfo({ name: 'Usuario', email });
      setScreen('Home');
    } else {
      alert('Por favor, ingresa correo y contraseña.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://storage.googleapis.com/a1aa/image/eN01gl2qELVfp0VjUZAenfCUzNWE0q8wYRCQnkA2fwSonQoeE.jpg',
        }}
        style={styles.logo}
      />
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
      <Button
        title="Iniciar sesión con Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
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
});
