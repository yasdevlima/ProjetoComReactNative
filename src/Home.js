import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }){

    const [userName,SetUsername] = useState('');
    const [usersenha,SetUsersenha] = useState('');

    const handleGoToSegundaTela = () =>{
        navigation.navigate('SegundaTela', {userName,usersenha} )

    }
    
    const handleGoToBotoes = () =>{
        navigation.navigate('Botoes' )
    }
    const estilo = StyleSheet.create({
        container :{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0c0c0c",
            


        },
        inputHome: {
            
           // width: 200,
            width: 300,
            height: 40,
            borderColor: 'black',
            marginBottom: '16',
            margin:12,
            borderWidth: 1,
            padding: 10,
            backgroundColor : 'white',

        },
        buttonHome:{
         marginBottom: 10,
         backgroundColor: "#09a8a1",
         width:'80%',
         padding: 10,
         borderRadius:20,
         alignItems: 'center',
         marginTop: 16,
         fontSize : 12,

        },
        centro:{
            fontSize: 30,
            color:  "#09a8a1",
            fontWeight: 'bold',
        },
        textoBotao: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
    });

    return(
        <View style ={estilo.container}>
            <Text style={estilo.centro}> Bem vindo(a) </Text>

            <TextInput style = {estilo.inputHome} 
                placeholder="Digite seu nome:" 
                onChangeText = { SetUsername }  
             
            />
               <TextInput style = {estilo.inputHome} 
                  placeholder="Digite sua senha:" 
                onChangeText = { SetUsersenha }  
             
            />
           


            <TouchableOpacity style={estilo.buttonHome}
            onPress={handleGoToBotoes }
            >
                <Text style={estilo.textoBotao}>
                Ir para a tela secundária 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.buttonHome}
            onPress={handleGoToSegundaTela}
            >
                <Text style={estilo.textoBotao}>
                Ver dados
                </Text>
            </TouchableOpacity>
            
            

            
          

        </View>
    )
}
