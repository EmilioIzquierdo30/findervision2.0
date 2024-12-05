import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoreScreen from '../pantallas/more.jsx';
import PerfilScreen from '../pantallas/perfil.jsx';
import ConfiguracionesScreen from '../pantallas/configuraciones.jsx';
import MyPlantsScreen from '../pantallas/misplantas.jsx';
import NotificacionesScreen from '../pantallas/notificaciones.jsx';
import AyudaScreen from '../pantallas/ayuda.jsx';

const Stack = createStackNavigator();

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{ title: 'Ver más' }}
      />
      <Stack.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{ title: 'Perfil' }}
      />
      <Stack.Screen
        name="ConfiguracionesScreen"
        component={ConfiguracionesScreen}
        options={{ title: 'Configuraciones' }}
      />
      <Stack.Screen
        name="MyPlantsScreen"
        component={FavoritosScreen}
        options={{ title: 'Favoritos' }}
      />
      <Stack.Screen
        name="NotificacionesScreen"
        component={NotificacionesScreen}
        options={{ title: 'Notificaciones' }}
      />
      <Stack.Screen
        name="AyudaScreen"
        component={AyudaScreen}
        options={{ title: 'Ayuda y Soporte' }}
      />
    </Stack.Navigator>
  );
};

export default MoreStackNavigator;
