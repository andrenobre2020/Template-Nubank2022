import React from "react";
import { View, Text,StyleSheet, StatusBar} from "react-native";
import Topo from "./Header";
import MiddleTransferencia from "./Middle";

export default function Transferencia(){
return(
    <><Topo />
    <MiddleTransferencia saldo='100.513.12' />
    </>
    
)
 
    
}