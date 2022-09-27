import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from './src/pages/Home';
import Transferencia from './src/pages/Home/Components/Transferencia';
import TransferenciaWho from './src/pages/Home/Components/TransferenciaWho/MiddleWho';
import Rotas from './src/rotas';
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="rotas" options={{headerShown:false}} component={Rotas} />
      
      <Stack.Screen name="Transferencia" options={{headerShown:false}} component={Transferencia} />
      <Stack.Screen name="TransferenciaWho" options={{headerShown:false}} component={TransferenciaWho} />
 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
