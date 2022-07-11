import React,{useRef} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import Balance from './Components/balance';
import Header from './Components/header';
import Movimento from './Components/movimento';
import Horizontal from './Components/scrollHorizontal';
import { Modalize } from 'react-native-modalize';
import Pix from './modal/modalPix';
import Cartao from './Components/cardCredit';


const list = [
  {
    id: 1,
    label: 'Boleto Vivo ',
    value: '127.20',
    date: '20/05/2022',
    type: 0

  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '1200.20',
    date: '20/06/2022',
    type: 1

  },
  {
    id: 3,
    label: 'Padaria Santana ',
    value: '120.00',
    date: '04/07/2022',
    type: 0

  },
  {
    id: 4,
    label: 'Mcdonalds ',
    value: '200.00',
    date: '09/05/2022',
    type: 0

  },
  {
    id: 5,
    label: 'Shirt -T ',
    value: '150.00',
    date: '02/05/2022',
    type: 0

  },
  {
    id: 6,
    label: 'Mochila ',
    value: '120.00',
    date: '15/05/2022',
    type: 0

  },
  {
    id: 7,
    label: 'Net Shoes',
    value: '189.00',
    date: '16/05/2022',
    type: 0

  },
  {
    id: 8,
    label: 'MercadoCar',
    value: '950.00',
    date: '16/05/2022',
    type: 0

  },
  {
    id: 9,
    label: 'Mercearia São Jorge',
    value: '109.00',
    date: '14/05/2022',
    type: 0

  },
  {
    id: 10,
    label: 'PIX Cliente',
    value: '210.00',
    date: '16/05/2022',
    type: 1

  },
]

export default function Home() {
  
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const modalizeRef = useRef('null');





  //Separando modal 


 


  return (
    <View style={styles.container}>
      <Header name='Olá, André Nobre'/>
      <Balance saldo='24.513.12'/>
      
      <Horizontal pix='Àrea Pix' pagar='Pagar' transferir='Transferir' onOpen={onOpen}  />

      <Cartao />
      
      <Text style={styles.title}> Ultimas Movimentação </Text>


      <Modalize ref={modalizeRef} snapPoint={670}>
        <Pix />
      </Modalize>


     
      
    

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movimento data={item} />}
      />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  
  
  },

  textHome:{
    color: '#000000',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  title:{
    fontWeight: 'bold',
    marginTop: 34,
    marginLeft: 14,
    marginRight: 14, 
    fontSize: 18,

  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
