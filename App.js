import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './scr/navegacion/barradeabajo.jsx';


const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
 
export default App;
