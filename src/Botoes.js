
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botoes({ navigation }){
    
    const handleGoToHome = () =>{
        navigation.navigate('Home')
    }
        const handleGoToFilme = () =>{
            navigation.navigate('Filme')
    }
   
    const estilo = StyleSheet.create({
        container :{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0c0c0c",
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
        textoBotao: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          centro:{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',

          }
    })
    
    return(
        <View style ={estilo.container}>
             <Text style={estilo.centro}> Informações </Text>
              <TouchableOpacity style={estilo.buttonHome}
            onPress={handleGoToFilme}
            >
                <Text style={estilo.textoBotao}>
                Ver o Filme
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.buttonHome}
            onPress={handleGoToHome}
            >
                <Text style={estilo.textoBotao}>
                Ir para a tela principal
                </Text>
            </TouchableOpacity>

            <View>
                
        
        </View>
        </View>
    )
}
