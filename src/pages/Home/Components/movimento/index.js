import React,{useState} from "react";
import { View ,StyleSheet,Text,TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
export default function Movimento({data}){

    const [showValue, setValue] = useState(false)
    return(
        <TouchableOpacity style={styles.container} onPress={() => setValue(!showValue)}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.contanter}>
            <Text style={styles.label}>{data.label}</Text>

          {showValue ? (
              <Text style={data.type === 1 ? styles.value : styles.expense}>R$ {data.value}</Text>
          ): (
            <View style={styles.esqueleto}>

            </View>
          )}
        </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    date:{
        color: '#dadada',
        fontWeight: 'bold'
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    contanter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },

    value:{
        color: '#2ecc71',
        fontSize: 16,
        fontWeight: 'bold'

    },

    expense:{
        color: '#B92303',
        fontSize: 16,
        fontWeight: 'bold'
    },
    esqueleto:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#C4C2C1',
        borderRadius: 12
    }
})