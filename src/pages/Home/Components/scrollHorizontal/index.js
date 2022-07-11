import React,{useRef} from "react";
import { View,ScrollView,Text,TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Horizontal({pix,pagar,transferir, onOpen}){
 
    return(
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>

            <TouchableOpacity style={styles.botao} onPress={onOpen}> 
            <MaterialCommunityIcons style={styles.icone} name="bank-transfer" size={24} color="black" />
           
            </TouchableOpacity>
           
            <Text style={styles.title}>{pix}</Text>

            
            <View style={styles.pagar}>
            <TouchableOpacity style={styles.botao1}> 
            <MaterialCommunityIcons name="barcode" size={24} color="black" />
            
            </TouchableOpacity>
           
            <Text style={styles.title1}>{pagar}</Text>
            </View>


            <View style={styles.pagar}>
            <TouchableOpacity style={styles.botao1}> 
            <MaterialCommunityIcons name="bank-transfer-out" size={24} color="black" />
           
            </TouchableOpacity>
           
            <Text style={styles.title2}>{transferir}</Text>
            </View>

            <View style={styles.pagar}>
            <TouchableOpacity style={styles.botao1}> 
            <MaterialCommunityIcons name="bank-transfer-in" size={24} color="black" />
           
            </TouchableOpacity>
           
            <Text style={styles.title2}>Depositar</Text>
            </View>

            
            <View style={styles.pagar}>
            <TouchableOpacity style={styles.botao1}> 
            <MaterialIcons name="smartphone" size={24} color="black" />
           
            </TouchableOpacity>
           
            <Text style={styles.title2}>Recarga de  {'\n'}  Celular</Text>
            </View>

            <View style={styles.pagar}>
            <TouchableOpacity style={styles.botao1}> 
            <MaterialIcons name="attach-money" size={24} color="black" />
           
            </TouchableOpacity>
           
            <Text style={styles.title3}>Cobrar</Text>
            </View>


            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginStart: 16,
        marginTop: 14,
        flexDirection: 'row',
        
      
    },
     pagar:{
        marginStart: 15
     },
    botao:{
        height: 64,
        width: 64,
        backgroundColor: 'rgba(233,230,229, 0.5)',
        borderRadius: 54 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 5,
        
        
        
       
    },
    botao1:{
        height: 64,
        width: 64,
        backgroundColor: 'rgba(233,230,229, 0.5)',
        borderRadius: 54 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 5,
        
        
       
    },


    icone:{
        alignItems: 'center',
        padding: 10
  
    },

    title:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       fontWeight: 'bold',
       marginTop: 70,
       marginLeft: -50

    },
    title1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 15
 
     },
     title2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 0
 
     },
     title3:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 7
 
     },
  
})