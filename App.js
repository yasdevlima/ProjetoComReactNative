import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Home";
import SegundaTela from "./src/SegundaTela";
import Botoes from "./src/Botoes";
import Filme from "./src/Filme";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Filme" component={ Filme }/>
      <Stack.Screen name="Botoes" component={ Botoes }/>
        <Stack.Screen name="Home" component={ Home }/>
        <Stack.Screen name="SegundaTela" component={ SegundaTela }/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}