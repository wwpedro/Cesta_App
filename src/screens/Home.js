import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
    return (
      <View style={estilos.tela}>
        <Text style={estilos.texto}>Home</Text>
        <TouchableOpacity style={estilos.botao} onPress={()=>navigation.navigate("Conteudo")}>
            <Text style={estilos.texto}>Conteudo</Text>
        </TouchableOpacity>
      </View>
    );
}

const estilos = StyleSheet.create({
    tela:{
        alignItems:"center",
        flexDirection:"column",
        flex:1,
        justifyContent:"center"
    },
    texto:{
        fontSize: 20
    },
    botao:{
        padding:20,
        margin:30,
        backgroundColor: "#D4D4D4"
    }
})