import React from "react";
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Cartao({onOpen}){
    return(
        <TouchableOpacity style={styles.container} onPress={onOpen}>
            <AntDesign name="creditcard" style={styles.icone} size={24} color="black" />
            <Text style={styles.Title}> Meus Cartão</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#F5F0EE',
        marginStart:25,
        marginEnd: 25,
        borderRadius: 44/2,
        marginTop: 26,
        alignItems: 'center',
        padding: 10,
        height: 75
    },
    Title:{
        fontWeight: 'bold',
        marginStart: 22,

    },
    icone:{
        marginStart: 12,
    }
})