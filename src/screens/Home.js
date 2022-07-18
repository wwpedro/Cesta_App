import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, ScrollView, Image } from "react-native";
import {useNavigation} from '@react-navigation/native'
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import Capa from "../../assets/OscarCapa.png";
import Encanto from "../../assets/Encanto/encanto.jpeg"

export default function Home() {
    const navigation = useNavigation()
    return (
        <ScrollView style={estilos.scrow}>
            <View style={estilos.tela}>
                <Image  source={Capa} style={estilos.capa} />
                <Text style={estilos.texto}>Os Filmes que ganharam a Premiação Oscars 2022</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Conteudo")}>
                    <View style={estilos.cartao}>
                        <Image  source={Encanto} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                        <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>Encanto</Text>
                        </View>    
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
      
        //<View style={estilos.tela}>
        //<Text style={estilos.texto}>Home</Text>
        //<TouchableOpacity style={estilos.botao} onPress={()=>navigation.navigate("Conteudo")}>
            //<Text style={estilos.texto}>Conteudo</Text>
        //</TouchableOpacity>
      //</View>
      //<Image  source={Encanto} style={estilos.imagemCartao} />
    );
}

const estilos = StyleSheet.create({
    scrow:{
        backgroundColor: "#000000" 
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
        borderBottomLeftRadius: 150,
    },
    texto:{
        fontSize: 20,
        paddingTop: 30,
        textAlign: "center",
        color: "#A9A9A9"
    },
    textoBranco:{
        color: "#ffffff"
    },
    cartao:{
        height: 150,
        width: "90%",
        marginTop: 50,
        borderBottomLeftRadius: 50,
        flexDirection:"row",
    },
    imagemCartao:{
        width: "100%",
        height: 150,
        borderBottomLeftRadius: 50,
    },
    imagemCartaoInterno:{
        height: 150,
        width: "40%",
        backgroundColor: "#000000",
        borderBottomLeftRadius: 50,
        position:"absolute",
        opacity: 0.6,
        alignItems: "center",
        justifyContent:"center"
    },
    botao:{
        padding:20,
        margin:30,
        backgroundColor: "#D4D4D4"
    }
})