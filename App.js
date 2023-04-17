import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React,{ useState, useEffect } from 'react';
import Botao from './Botao';

export default function App() {

  console.disableYellowBox = true;

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondtNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");

  const [stringCalculo, setStringCalculo] = useState(0);

  var numeros = [];

  for(var i = 0; i <= 9; i++){
    numeros.push(i);
  }

  function logicaCalculadora(){
    //logica da calculadora
  }

  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <StatusBar hidden />
      <View style={styles.topo}><Text style={{fontSize:24,color:'white'}}>{stringCalculo}</Text></View>

      <View style={{flexDirection:'row',height:'16.6%',alignItems:'center'}}>
        <TouchableOpacity style={{width:'25%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}><Text style={{fontSize:24,textAlign:'center',color:'white'}}>+</Text></TouchableOpacity>
        <TouchableOpacity style={{width:'25%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}><Text style={{fontSize:24,textAlign:'center',color:'white'}}>-</Text></TouchableOpacity>
        <TouchableOpacity style={{width:'25%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}><Text style={{fontSize:24,textAlign:'center',color:'white'}}>/</Text></TouchableOpacity>
        <TouchableOpacity style={{width:'25%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}><Text style={{fontSize:24,textAlign:'center',color:'white'}}>*</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',flexWrap:'wrap',borderTopColor:'black',borderTopWidth:2,height:'66.8%'}}>
        {
          numeros.map(function(e){
            return(<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>)
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding:10,
    backgroundColor:'rgb(20,20,20)',
    height:'16.6%',
    justifyContent:'center',
    paddingLeft:20
  }
});
