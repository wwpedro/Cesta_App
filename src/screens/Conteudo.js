import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

import Encanto from "../../assets/encanto.jpeg"

export default function Conteudos() {

    const navigation = useNavigation()

    return (
      
        <ScrollView style={estilos.scrow}>
            <View style={estilos.tela}>
                <View style={estilos.capa}>
                    <Image  source={Encanto} style={estilos.imagemCapa} />
                    <View style={estilos.imagemCapaConteudo}>
                        <Text onPress={()=>navigation.goBack()}>Voltar</Text>
                    </View>    
                </View>
            </View>

        </ScrollView>

      //<View style={estilos.tela}>
        //<Text style={estilos.texto}>Conteudos</Text>
        //<TouchableOpacity style={estilos.botao} onPress={()=>navigation.goBack()}>
            //<Text style={estilos.texto}>Voltar</Text>
        //</TouchableOpacity>
      //</View>
    );
}

const estilos = StyleSheet.create({
    scrow:{
        backgroundColor: "#1A0607" 
    },
    tela:{
        alignItems:"center",
        flexDirection:"column",
        flex:1,
        justifyContent:"center"
    },
    capa:{
        height: 300,
        width: "100%",
        borderBottomLeftRadius: 50,
        flexDirection:"row",
    },
    imagemCapa:{
        width: "100%",
        height:300,
        borderBottomLeftRadius: 70,
    },
    imagemCapaConteudo:{
        height: 300,
        width: "40%",
        borderBottomLeftRadius: 50,
        position:"absolute",
        marginTop: 50,
        marginLeft:10 
    },
    botao:{
        padding:20,
        margin:30,
        backgroundColor: "#D4D4D4"
    }
})