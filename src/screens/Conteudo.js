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
                <View style={estilos.conteudoView}>
                    <View style={estilos.sobreFilme}>
                        <Text style={estilos.titulo}>
                            Encanto
                        </Text>
                        <View style={estilos.texto}>            
                            <Text style={estilos.textoConteudo}>
                                <Text style={estilos.primeiraLetra}>V</Text>
                                encedor do Globo de Ouro de animação e um dos favoritos na disputa 
                                do Oscar deste ano, conta a história dos Madrigal, uma família extraordinária 
                                que vive em um povoado na Colômbia. Cada membro tem um dom especial: força 
                                excepcional, a capacidade de criar flores ou o poder de curar através da comida.
                            </Text>
                            <Image></Image>
                        </View>
                    </View>

                    <View style={estilos.elenco}>
                        <Text style={estilos.titulo}>Personagens</Text>
                    </View>

                    <View style={estilos.classificacao}>
                        <Text style={estilos.titulo}>Classificação</Text>
                        <View style={estilos.estrelas}></View>
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
    },


    conteudoView:{
        flexDirection:"column",
        alignItems:"center",
        width:"100%"
    },


    sobreFilme:{
        flexDirection:"column",
        alignItems:"center"
    },
    titulo:{
        color:"#ffffff",
        fontSize: 40
    },
    texto:{
        flexDirection: "row",
        width:"80%",
        alignItems:"center",
        justifyContent:"center"
    },
    primeiraLetra:{
        height:50,
        width:50,
        fontSize:50,
        color:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        position:"relative"

    },
    textoConteudo:{
        fontSize:20,
        color:"#ffffff"
    },



    elenco:{
        marginTop:30,
        height:"40%",
        width:"100%",
        backgroundColor:"red",
        alignItems:"center"
    },
})