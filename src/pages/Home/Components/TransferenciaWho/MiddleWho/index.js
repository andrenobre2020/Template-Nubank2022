import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from "react-native";
import TopoWho from "../header";
import { FontAwesome5 } from '@expo/vector-icons';

export default function MiddleWho({route}){
    const[pix,Setpix]=useState('')
    const[cpf,Setcpf] = useState(true)
    const[celular,Setcelular] = useState(true)
    const[cnpj,Setcnpj] = useState(true)
    const[email,Setemail] = useState(true)

    useEffect(()=> {
        if(pix.length == 13){
          
        Setcelular(false)
         
        }else{
            Setcelular(true)
        } if(pix.length == 11 && pix == Number(pix)){
           Setcpf(false)
        }else{Setcpf(true)}
         if(pix.length == 14 && Number(pix)){
            Setcnpj(false)
        }else{
            Setcnpj(true)
        }
    },[pix])

    return(
        <><TopoWho />
        <View style={styles.container}>

            <Text style={styles.Texto}>Para quem você quer  {'\n'} transferir ?</Text>
            <Text style={{marginTop:10,marginStart:10,fontSize:16,fontWeight:'bold',color:'#d2d1d2'}}>Transferindo   <Text style={{color:'#000'}}>{route.params.Valor}</Text></Text>

            <View style={{alignItems:'center',marginTop:50}}>
                <Text style={{color:'#B1B1B9',fontWeight:'600',fontSize:16}}>Buscar na lista ou transferir para contato novo </Text>


                <TextInput onChangeText={pix => Setpix(pix)} style={{marginTop:30,padding:10,fontSize:22,fontWeight:'600',borderBottomWidth:1,borderColor:'#edebed'}} placeholder="Nome,CPF/CNPJ,celular ou e-mail" />

               

                
            </View>

       <View style={{alignItems:'center', marginEnd:40,marginTop:20}}>
       {cpf ? (
           <Text></Text>
           ):(
            <View style={{alignItems:'center',marginStart:20}} >
              <TouchableOpacity style={{backgroundColor:'#820ad1',borderRadius:24,width:350,padding:16}}>
                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center',fontSize:16}}>Transferir para este CPF</Text>
              </TouchableOpacity>
            </View>
           )}



{cnpj ? (
           <Text></Text>
           ):(
            <View style={{alignItems:'center',marginStart:20}} >
              <TouchableOpacity style={{backgroundColor:'#820ad1',borderRadius:24,width:350,padding:16}}>
                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center',fontSize:16}}>Transferir para este CNPJ</Text>
              </TouchableOpacity>
            </View>
           )}

{email ? (
           <Text></Text>
           ):(
            <View style={{alignItems:'center',marginStart:20}} >
              <TouchableOpacity style={{backgroundColor:'#820ad1',borderRadius:24,width:350,padding:16}}>
                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center',fontSize:16}}>Transferir para este E-mail</Text>
              </TouchableOpacity>
            </View>
           )}



{celular ? (
           <Text></Text>
           ):(
            <View style={{alignItems:'center',marginStart:20}} >
              <TouchableOpacity style={{backgroundColor:'#820ad1',borderRadius:24,width:350,padding:16}}>
                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center',fontSize:16}}>Transferir para este celular</Text>
              </TouchableOpacity>
            </View>
           )}



       </View>


            <View style={{marginStart:30,marginTop:50}}>
                <Text style={{fontWeight:'bold'}}>Contatos frequente</Text>

                <ScrollView horizontal={true} style={{marginTop:30,marginStart:15}}>

                    <View style={{backgroundColor:'#B1B1B9',borderRadius: 80/2,width:70,height:70,marginEnd:18}}>
                        <Text style={{textAlign:'center',marginTop:25}}>Gb</Text>
                        
                    </View>
             


                    <View style={{backgroundColor:'#B1B1B9',borderRadius: 80/2,width:70,height:70,marginEnd:18}}>
                        <Text style={{textAlign:'center',marginTop:25}}>LC</Text>
                    </View>
                    <View style={{backgroundColor:'#B1B1B9',borderRadius: 80/2,width:70,height:70,marginEnd:18}}>
                        <Text style={{textAlign:'center',marginTop:25}}>FB</Text>
                    </View>
                    <View style={{backgroundColor:'#B1B1B9',borderRadius: 80/2,width:70,height:70,marginEnd:18}}>
                        <Text style={{textAlign:'center',marginTop:25}}>GU</Text>
                    </View>
                </ScrollView>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:10,marginStart:15,fontWeight:'600'}}>Giovanna</Text>
                <Text style={{marginTop:10,marginStart:40,fontWeight:'600'}}>Lucas</Text>
                <Text style={{marginTop:10,marginStart:40,fontWeight:'600'}}>Francisco</Text>
                <Text style={{marginTop:10,marginStart:30,fontWeight:'600'}}>Gustavo</Text>
                </View>
            </View>
          

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    Texto:{
        fontWeight:'bold',
        fontSize:28,
        marginTop:20,
        marginStart:10
    }
})
