import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import AppStack from './src/stackScreen/AppStackNavigation';
import { Text, View } from 'react-native';


const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
};

export default App;
