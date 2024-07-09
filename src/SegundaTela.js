import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default function SegundaTela({ route, navigation }){
    const { userName } = route.params;
    const { usersenha } = route.params;

   
    const handleGoToHome = () =>{
        navigation.navigate('Home')
    }
    const estilo = StyleSheet.create({
        container: {

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:  "black",
        },
        text: {
            color: 'white',
            fontSize: 20,
            margin: 10,
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
            color: "#09a8a1",
            fontSize: 20,
            fontWeight: 'bold',
          }
        
    });

    return(
        <View style={estilo.container}>
            <Text style={estilo.centro}> Dados armzenados</Text>

            <Text style={estilo.text}>Nome: { userName } </Text>
            <Text style={estilo.text}>Senha:{ usersenha } </Text>
            <TouchableOpacity style={estilo.buttonHome}
            onPress={handleGoToHome}
            >
                <Text style={estilo.textoBotao}>
                Ir para a tela principal
                </Text>
            </TouchableOpacity>
            <Image
        source={require('../../telas/assets/se.png')} // Caminho relativo ao diretório expo
        style={{ width: 600, height: 320 }} ></Image>
        </View>
    )
}