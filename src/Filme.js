import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

export default function Filme({ navigation }){
    
    const handleGoToHome = () =>{
        navigation.navigate('Home')
    }
    const estilo = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#0c0c0c",

        },
        imagem: {
          width: 200, // Largura da imagem
          height: 200, // Altura da imagem
        },
        texto : {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white', // Cor do texto


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
      });
    return(
        <View style = {estilo.container} >
                   <Image
        source={require('../../telas/assets/t.png')} // Caminho relativo ao diretório expo
        style={{ width: 600, height: 320 }} // Ajuste o tamanho conforme necessário
      />
            <Text style={estilo.texto}> "The Chosen" é uma inovadora série de televisão que narra a vida de Jesus Cristo e seus primeiros seguidores. A série é elogiada por sua abordagem autêntica e 
            emocionalmente envolvente, bem como por seu financiamento independente. Ela oferece uma
             representação diversificada dos personagens bíblicos e aborda temas universais de fé e 
             relacionamentos humanos, atraindo tanto cristãos quanto não-cristãos. A série utiliza locações 
             autênticas na Terra Santa e é conhecida por sua qualidade cinematográfica e atenção aos detalhes
              históricos. "The Chosen" se tornou uma parte significativa do cenário cultural contemporâneo.</Text>


       
         <TouchableOpacity style={estilo.buttonHome}
            onPress={handleGoToHome}
            >
                <Text style={estilo.textoBotao}>
                Ir para a tela principal
                </Text>
            </TouchableOpacity>
        
        </View>
    )
}
