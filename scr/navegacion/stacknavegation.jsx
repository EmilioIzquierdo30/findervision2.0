// scr/navegacion/HomeStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pantallas/home';
import PremiumScreen from '../pantallas/premuim';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Premium" component={PremiumScreen} options={{ title: 'Premium' }} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
