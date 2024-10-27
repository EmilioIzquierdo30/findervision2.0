import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import HomeScreen from '../pantallas/home';
import DiagnoseScreen from '../pantallas/diagnostico';
import MyPlantsScreen from '../pantalas/misplantas';
import MoreScreen from '../pantallas/more';

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
      })}
      tabBarOptions={{
        activeTintColor: '#6bbd72',
        inactiveTintColor: 'gray',
        style: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Diagnóstico" component={DiagnoseScreen} />
      <Tab.Screen name="Mis plantas" component={MyPlantsScreen} />
      <Tab.Screen name="Ver más" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
