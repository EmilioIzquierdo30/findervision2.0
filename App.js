import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './scr/navegacion/barradeabajo.jsx';
import { ThemeProvider } from './themecontext.jsx';

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
    </ThemeProvider>
  );
};
 
export default App;
