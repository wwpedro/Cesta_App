import React from "react";

// dizer quais são as rotas
import Home from "../../screens/Home";
import Conteudo from "../../screens/Conteudo";

//importar create para trabalhar com navegacoes
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//criando contexto de navegação do tipo stack
const { Navigator, Screen} = createNativeStackNavigator()

export default function(){
    return(
        //recebe as telas
        <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Conteudo" component={Conteudo} />
        </Navigator>
    );
}