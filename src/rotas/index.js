import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Cartao from '../pages/Home/Components/cardCredit';
import Compras from '../pages/Home/Components/Compras';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{headerShown:false, tabBarLabel: '' ,tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="swap-vertical" size={30} color="#820ad1" />
      )}} component={Home} />

<Tab.Screen name="Cartao" options={{headerShown:false, tabBarLabel: '' ,tabBarIcon: ({ color, size }) => (
     <MaterialIcons name="attach-money" size={30} color="#820ad1" />
      )}} component={Cartao} />


<Tab.Screen name="Compras" options={{headerShown:false, tabBarLabel: '' ,tabBarIcon: ({ color, size }) => (
     <SimpleLineIcons name="handbag" size={24} color="#820ad1" />
      )}} component={Compras} />

     
    </Tab.Navigator>
  );
}



//Aba do relatorio 



export default function Rotas(){
    return(
        
        <MyTabs />

    )
} ;