import react,{useState} from "react";
import { View,Text,StyleSheet,TextInput,TouchableOpacity, KeyboardAvoidingView, Platform, } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import TransferenciaWho from "../../TransferenciaWho";
export default function MiddleTransferencia({saldo}){

    const[inputMoeda,setInputMoeda] = useState('0')
    const[valorMoeda,setValorMoeda] = useState(0)
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.Texto}>Qual é o Valor da   {'\n'}
            transferencia ? </Text>
            <Text style={{color: '#d1d1da',fontWeight:'bold',paddingTop:10,marginStart:20}}>Saldo Disponivel :<Text style={{color:'#000'}}> R$ {saldo} </Text> </Text>
   
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height" || Platform.OS === 'android' ? "padding" : "height"} keyboardVerticalOffset={130}> 
                <TextInputMask 
                type={'money'}
                style={styles.input}
                
                value={inputMoeda}
                maxLength={18}
                onChangeText={value => {
                    setInputMoeda(value)
                    value= value.replace('R$','')
                    value= value.replace('.','')
                    value= value.replace(',','.')
                    setValorMoeda(Number(value))
                }}
                />
            </KeyboardAvoidingView>
                <View style={{alignItems:'flex-end'}}>
         
            <TouchableOpacity style={styles.Botao} onPress={() => {navigation.navigate('TransferenciaWho', {  Valor:inputMoeda})}}>
            <AntDesign name="arrowright" size={34} color="#fff"  style={{alignItems:'center',marginStart:10,marginTop:10}}/>
            </TouchableOpacity>
            
            </View>

                    
           
        </View>
    )
}


const styles =StyleSheet.create({
    container:{
        flex: 1,
        
        backgroundColor:'#fff'
        

    },
    Texto:{
        fontWeight:'bold',
        fontSize:38,
        marginTop:40,
        marginStart:20
    },
    input:{
        marginTop:40,
        
        width:350,
        borderRadius:10,padding:20,
        fontSize: 30,
        fontWeight:'bold',
        borderBottomColor:'#dadada',
        borderBottomWidth:1,
        marginStart:20

    },
    Botao:{
        backgroundColor:'#820ad1',
        borderRadius: 60 / 2,
        width:60,
        height:60,
        marginTop: 100,
        marginEnd:15
        
    }
})