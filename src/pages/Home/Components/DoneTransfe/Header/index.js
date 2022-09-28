import React from "react";
import { View, Text,StyleSheet, StatusBar} from "react-native";

const statusbarHeight =  StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function HeadeDone(){
    return(
       <View style={styles.container}>
       
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: statusbarHeight,
        backgroundColor: '#820ad1',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:3,
        paddingTop:50
    }
})