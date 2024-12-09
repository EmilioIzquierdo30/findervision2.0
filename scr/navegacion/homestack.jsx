import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pantallas/home.jsx';
import CameraScreen from '../pantallas/camara.jsx';
import ChatBotScreen from '../pantallas/chatbot.jsx';
import DiagnoseScreen from '../pantallas/diagnostico.jsx';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Diagnóstico"
        component={DiagnoseScreen}
        options={{ title: 'Diagnóstico' }}
      />
      <Stack.Screen
        name="Identificar"
        component={CameraScreen}
        options={{ title: 'Identificar Planta' }}
      />
      <Stack.Screen
        name="ChatBot"
        component={ChatBotScreen}
        options={{ title: 'Asesor de Plantas' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
