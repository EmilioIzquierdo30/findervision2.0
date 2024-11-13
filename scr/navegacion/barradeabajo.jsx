import HomeStackNavigator from './stacknavegation.jsx';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import DiagnoseScreen from '../pantallas/diagnostico.jsx';
import MyPlantsScreen from '../pantallas/misplantas.jsx';
import MoreScreen from '../pantallas/more.jsx';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Inicio':
              iconName = 'home-outline';
              break;
            case 'Diagnóstico':
              iconName = 'medkit-outline';
              break;
            case 'Mis plantas':
              iconName = 'leaf-outline';
              break;
            case 'Ver más':
              iconName = 'ellipsis-horizontal-outline';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        // Configuraciones de tab bar (antes en tabBarOptions)
        tabBarActiveTintColor: '#6bbd72',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          display: 'flex',
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStackNavigator} options={{ headerShown: false }} />      
      <Tab.Screen name="Diagnóstico" component={DiagnoseScreen} />
      <Tab.Screen name="Mis plantas" component={MyPlantsScreen} />
      <Tab.Screen name="Ver más" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
