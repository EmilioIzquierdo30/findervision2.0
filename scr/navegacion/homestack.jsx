import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pantallas/home.jsx'; 
import ChatBotScreen from '../pantallas/chatbot.jsx'; 
import CameraScreen from '../pantallas/camara.jsx'; 
import DiagnoseScreen from '../pantallas/diagnostico.jsx'; 
import PerfilScreen from '../pantallas/perfil.jsx'; 
import ConfiguracionesScreen from '../pantallas/configuracion.jsx'; 
import NotificacionesScreen from '../pantallas/notificaciones.jsx'; 
import AyudaScreen from '../pantallas/ayuda.jsx';

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
        name="ChatBot"
        component={ChatBotScreen}
        options={{ title: 'Asesor de Plantas' }} // Título del encabezado
      />
      {/* Pantalla para Identificar plantas */}
      <Stack.Screen
        name="Identificar"
        component={CameraScreen}
        options={{ title: 'Identificar Planta' }}
      />
      {/* Diagnóstico */}
      <Stack.Screen
        name="Diagnóstico"
        component={DiagnoseScreen}
        options={{ title: 'Diagnóstico' }}
      />
      {/* Pantalla de Perfil */}
      <Stack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: 'Perfil' }}
      />
      {/* Pantalla de Configuraciones */}
      <Stack.Screen
        name="Configuraciones"
        component={ConfiguracionesScreen}
        options={{ title: 'Configuraciones' }}
      />
      {/* Pantalla de Notificaciones */}
      <Stack.Screen
        name="Notificaciones"
        component={NotificacionesScreen}
        options={{ title: 'Notificaciones' }}
      />
      {/* Pantalla de Ayuda y Soporte */}
      <Stack.Screen
        name="Ayuda"
        component={AyudaScreen}
        options={{ title: 'Ayuda y Soporte' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
