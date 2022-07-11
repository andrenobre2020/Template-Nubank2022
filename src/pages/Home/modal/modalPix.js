import React, {useRef} from "react";
import { View,StyleSheet,Text,TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';



export default function Pix(){
    const onOpen = () => {
        modalizeRef.current?.open();
      };
      const modalizeRef = useRef('null');
    return(
        <View style={styles.container}>
              
            <Text style={styles.title}> Área de Pix</Text>
            <Text style={styles.subtitle}>Envie e receba pagamentos a qualquer hora   {'\n'} e dia da semana, sem paga nada por isso.</Text>
            <Text style={styles.Send}>Enviar</Text>
           
            <View style={styles.pagar}>

            <TouchableOpacity style={styles.botao1} onPress={onOpen} > 

            <MaterialCommunityIcons name="bank-transfer-out" size={34} color="black"  />
           
            </TouchableOpacity>
           
            <Text style={styles.title2}>Transferir</Text>

          
            </View>
            
                <View style={styles.colar}>
                    <TouchableOpacity  style={styles.pixColar}>
                    <Ionicons name="copy-outline" size={34} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.titlePix}>Pix Copia e Cola</Text>
                </View>
              <View style={styles.qrCode}>
                <TouchableOpacity style={styles.botao1}>
                <AntDesign name="qrcode" size={34} color="black" />
                </TouchableOpacity>
                <Text style={styles.titleQr}>Ler QR code</Text>
              </View>

              <Text style={styles.receive}>Receber</Text>

              <View style={styles.receiveBo}>

              <TouchableOpacity style={styles.cobrar}>
              <FontAwesome name="dollar" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.titleCobrar}>Cobrar </Text>


                <TouchableOpacity style={styles.cobrar1}>
                <MaterialCommunityIcons name="bank-transfer-in" size={24} color="black" /> 
                </TouchableOpacity>
                <Text style={styles.titleCobrar}>Depositar </Text>
              </View>

              <Modalize ref={modalizeRef} snapPoint={600}>
                <View>
                    <Text>Achando o pix </Text>
                </View>
             </Modalize>
        </View>

        
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 19,
        justifyContent: 'center',
       

    }, 
    title:{
        fontWeight: 'bold',
        fontSize: 28,
        paddingBottom: 16,
        justifyContent:'center',
        marginStart: 19,
    },
    subtitle:{
        color: '#807D7C',
        textAlign: 'center',
        flexDirection: 'row',
        fontSize: 18,

    },
    Send:{
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 15,
        marginStart: 19,

    },
    pagar:{
        marginStart: 50,
        marginTop:20,
        
       
     },
     botao1:{
        height: 70,
        width: 70,
        backgroundColor: 'rgba(233,230,229, 0.5)',
        borderRadius: 54 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 5,
        flexDirection: 'row',
        
        
        
       
    },
    title2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 0
 
     },
     colar:{
        flexDirection: 'row',
        marginStart: 130,
        paddingStart: 55,
        marginTop: -90

     },

     pixColar:{
        height: 70,
        width: 70,
        backgroundColor: 'rgba(222, 222, 222, 0.5)',
        borderRadius: 54 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 5,
        flexDirection: 'row',
     },
     titlePix:{
        fontWeight: 'bold',
        marginTop: 75,
        marginLeft: -78
     },

     qrCode:{
        alignItems:'flex-end',
        marginEnd: 40,
        marginTop: -95
      
     },

     titleQr:{
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 10,
        marginEnd: -12,
        fontWeight: 'bold'
     },

     cobrar:{
        height: 70,
        width: 70,
        backgroundColor: 'rgba(233,230,229, 0.5)',
        borderRadius: 54 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 5,
        flexDirection: 'row',
        marginStart: 35,
        marginTop: 15
        
     },

     cobrar1:{
        height: 70,
        width: 70,
        backgroundColor: 'rgba(233,230,229, 0.5)',
        borderRadius: 54 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 5,
        flexDirection: 'row',
        marginStart: 55,
        marginTop: 15,
      
        
     },

     receive:{
        fontWeight: 'bold',
        fontSize: 20,
        marginStart: 12,
        marginTop: 15
     },

     receiveBo:{
        flexDirection: 'row',
        

     },

     titleCobrar:{
        fontWeight: 'bold',
        marginTop: 90,
        marginLeft: -60
     }
 
})

