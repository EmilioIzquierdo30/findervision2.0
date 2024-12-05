import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pantallas/home.jsx'; 
import ChatBotScreen from '../pantallas/chatbot.jsx'; 
import CameraScreen from '../pantallas/camara.jsx'; 
import DiagnoseScreen from '../pantallas/diagnostico.jsx'; 

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Pantalla inicial del Home */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Oculta el encabezado para mantener el diseño limpio
      />
      {/* Pantalla para el Asesor de Plantas */}
      <Stack.Screen
        name="ChatBotScreen"
        component={ChatBotScreen}
        options={{ title: 'Asesor de Plantas' }} // Título del encabezado
      />
      {/* Pantalla para Identificar plantas */}
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ title: 'Identificar Planta' }}
      />
      {/* Diagnóstico: si quieres que el flujo de Diagnostique pase por aquí */}
      <Stack.Screen
        name="DiagnoseScreen"
        component={DiagnoseScreen}
        options={{ title: 'Diagnóstico' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
