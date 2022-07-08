import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function Conteudos() {

    const navigation = useNavigation()

    return (
      <View style={estilos.tela}>
        <Text style={estilos.texto}>Conteudos</Text>
        <TouchableOpacity style={estilos.botao} onPress={()=>navigation.goBack()}>
            <Text style={estilos.texto}>Voltar</Text>
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