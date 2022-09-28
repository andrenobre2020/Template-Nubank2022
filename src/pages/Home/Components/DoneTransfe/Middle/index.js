import React from "react";
import { View,StyleSheet ,Text} from "react-native";
import HeadeDone from "../Header";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
export default function DoneMiddle({route}){
    return(
        <><HeadeDone />
        <View style={styles.container} >

           <Text style={{marginTop:20,marginStart:25,fontWeight:'600',fontSize:30}}>Transferindo</Text> 

           <View style={{marginStart:30,marginTop:7}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:38,color:'#820ad1',fontWeight:'bold'}}>{route.params.Valor}</Text>
            <FontAwesome5 style={{marginTop:10,marginStart:12}} name="pencil-alt" size={20} color="#820ad1" />
            </View> 
            <Text>para <Text style={{fontWeight:'bold',fontSize:16}}>Lucas Santos</Text></Text>
           </View>

           <View style={{marginStart:30,marginTop:20,backgroundColor:'#edebed',borderRadius:15,width:290,padding:12,flexDirection:'row'}}>
           <MaterialCommunityIcons name="message-processing-outline" size={24} color="black" />
            <Text style={{fontWeight:'bold',textAlign:'center',marginStart:20}}>Escrever uma mensagem </Text>
           </View>

           <View style={{borderBottomWidth:1,borderTopWidth:1,borderColor:'#e5e5e5',marginTop:15,padding:20}}>
            <Text style={{color:'#c2c1c2',fontWeight:'700'}}>Quando</Text>
            <Text style={{fontWeight:'700',marginTop:10}}>Agora</Text>
           </View>

           <View style={{borderBottomWidth:1,borderTopWidth:1,borderColor:'#e5e5e5',padding:20}}>
            <Text style={{color:'#c2c1c2',fontWeight:'700'}}>Tipo de transferencia</Text>
            <Text style={{fontWeight:'700',marginTop:10}}>PIX</Text>
           </View>


           <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginStart:15,marginEnd:15}}>
            <Text style={{color:'#c2c1c2',fontWeight:'700',marginTop:10}}>CPF</Text>
            <Text style={{fontWeight:'700',marginTop:10}}>***{route.params.Pix}***</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginStart:15,marginEnd:15,marginTop:15}}>
            <Text style={{color:'#c2c1c2',fontWeight:'700',marginTop:10}}>Instituição</Text>
            <Text style={{fontWeight:'700',marginTop:10}}>Banco Itau</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginStart:15,marginEnd:15,marginTop:15}}>
            <Text style={{color:'#c2c1c2',fontWeight:'700',marginTop:10}}>Agência</Text>
            <Text style={{fontWeight:'700',marginTop:10}}>9828</Text>
            </View>


            <View style={{flexDirection:'row',justifyContent:'space-between',marginStart:15,marginEnd:15,marginTop:15}}>
            <Text style={{color:'#c2c1c2',fontWeight:'700',marginTop:10}}>Conta</Text>
            <Text style={{fontWeight:'700',marginTop:10}}>45742-8</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginStart:15,marginEnd:15,marginTop:15}}>
            <Text style={{color:'#c2c1c2',fontWeight:'700',marginTop:10}}>Tipo de conta</Text>
            <Text style={{fontWeight:'700',marginTop:10}}>Conta corrente</Text>
            </View>
           </View>


         <View style={{alignItems:'center',marginTop:30}}>
         <TouchableOpacity style={{borderRadius:15,backgroundColor:'#820ad1',width:280,padding:20}}>
                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center'}}>Transferir</Text>
            </TouchableOpacity>
         </View>
        </View>
        
        </>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})