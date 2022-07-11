import React from "react";
import { View, StyleSheet,Text, StatusBar,TouchableOpacity } from "react-native";
// Importando um botao direto da biblioteca do expo 
import { AntDesign } from '@expo/vector-icons';

// Decide o tamanho do status bar !!!
const statusbarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){
    
    return(
        <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.text}>{name} </Text>

        <TouchableOpacity style={styles.botao}> 
        <AntDesign name="user" size={27} color="#fff" />
        </TouchableOpacity>
        </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
    backgroundColor: '#820ad1',
    paddingTop: statusbarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44
    },
    content:{
      flex:1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text:{
        fontWeight:"bold",
        color: '#fff',
        fontSize: 18,
    },
    botao:{
        height: 44,
        width: 44,
        backgroundColor: 'rgba(196,194,193, 0.5)',
        borderRadius: 44 / 2 ,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });
  