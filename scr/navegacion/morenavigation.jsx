import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoreScreen from '../pantallas/more.jsx';
import PerfilScreen from '../pantallas/perfil.jsx';
import ConfiguracionesScreen from '../pantallas/configuracion.jsx';
import NotificacionesScreen from '../pantallas/notificaciones.jsx';
import AyudaScreen from '../pantallas/ayuda.jsx';

const Stack = createStackNavigator();

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={MoreScreen} options={{ title: 'Ver Más' }} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Configuraciones" component={ConfiguracionesScreen} />
      <Stack.Screen name="Notificaciones" component={NotificacionesScreen} />
      <Stack.Screen name="Ayuda" component={AyudaScreen} />
    </Stack.Navigator>
  );
};

export default MoreStackNavigator;
