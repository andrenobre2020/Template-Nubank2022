import React,{useState} from "react";
import { View,Text,StyleSheet ,TouchableOpacity} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Balance({saldo}){
   
   //ESTOU CRIANDO UM ESTADO NA APLICAÇÃO 


    // Como criar if or else , mas você deve criar a função fora 

    // const  vexibir =  (props) => { if(props){return(<View> <Text> Funcionando  </Text> </View>)} }else{ return(<View><Text> Não funcionando </Text> </View>)}


    // Ou você pode fazer uma chamada na função , mas antes tenho que criar uma variavel
    // const exibir = {true}
    // chamada a função { exibir ? <Text> Funcionando </Text> : <Text> Não Funcionando </Text>}

    //  o '?' é como fosse 'if' 

    // e o ':' como fosse o 'else' 


    const [showValue, setValue] = useState(true)
    return(
        
        <View style={styles.container}>
           <View style={styles.Item}>
           <TouchableOpacity onPress={() => setValue(!showValue)}>
           <Entypo style={styles.title} name="eye" size={24} color="black" />
          
           </TouchableOpacity>
           
           </View>
           <View style={styles.simbolo}> 
          
           <Text style={styles.moeda}>R$ </Text>

        
           {showValue ? (
           <Text  style={styles.valor}>{saldo}</Text>
           ):(
            <View style={styles.esqueleto} >
                <FontAwesome name="ellipsis-h" size={30} color="black" />
            </View>
           )}
           </View>

       
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',paddingStart: 18,
        paddingEnd: 18,
        marginTop: -20,
        marginStart: 18,
        marginEnd: 18,
        borderRadius: 14,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    title:{
        
      
        color: '#414141'
    },
    simbolo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    valor:{
        fontWeight: 'bold',
        fontSize: 20
    },   
    esqueleto:{
       
        width: 30,
       
      
    },
    moeda:{
        fontSize:16,
        fontWeight: 'bold'
    }
    
})


// zIndex serve para deixar esse box acima de todas as camadas 