import React from "react";
import { Image, ScrollView, StyleSheet, Text, View,Linking } from "react-native";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lora_400Regular } from '@expo-google-fonts/lora';

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Encanto from "../../assets/Encanto/encanto.jpeg";
import Maribel from "../../assets/Encanto/maribel.jpg";
import Isabela from "../../assets/Encanto/isabela.jpg";
import Bruno from "../../assets/Encanto/bruno.jpg";
import Luisa from "../../assets/Encanto/luisa.jpg";
import Pepa from "../../assets/Encanto/pepa.jpg";
import Dolores from "../../assets/Encanto/dolores.jpg";

export default function Conteudos() {

    const navigation = useNavigation();
    
    let [fontsLoaded] = useFonts({
        Lora_400Regular,
      });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
      
        <ScrollView style={estilos.scrow}>
            <View style={estilos.tela}>
                <View style={estilos.capa}>
                    <Image  source={Encanto} style={estilos.imagemCapa} />
                    <View style={estilos.imagemCapaConteudo}>
                        <IconFontAwesome onPress={()=>navigation.goBack()} name="arrow-left" size={20} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
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
                            <MaterialCommunityIcons name="movie-filter" size={30} color="blck" onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=zRMicKd9IH8');}} ></MaterialCommunityIcons>
                        </View>
                    </View>

                    <View style={estilos.elenco}>
                        <Text style={estilos.tituloElenco}>Personagens</Text>
                        <View style={estilos.elencoScrowll}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={estilos.personagem}>
                                    <Image  source={Maribel} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Mirabel Madrigal</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Bruno} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Bruno Madrigal</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Isabela} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Isabela Madrigal</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Luisa} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Luisa Madrigal</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Pepa} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Pepa Madrigal</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Dolores} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Dolores Madrigal</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    <View style={estilos.classificacao}>
                        <Text style={estilos.titulo}>Classificação</Text>
                        <View style={estilos.classificacaoEstrelas}>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    scrow:{
        backgroundColor: "#ffffff",
    },
    tela:{
        alignItems:"center",
        flexDirection:"column",
        flex:1,
        justifyContent:"center"
    },
    
    //capa
    capa:{
        height: 300,
        width: "100%",
        borderBottomLeftRadius: 50,
        flexDirection:"row",
        marginTop:"15%"
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
        marginTop: 70,
        marginLeft:10 
    },
    botao:{
        padding:20,
        margin:30,
        backgroundColor: "#D4D4D4"
    },

    //conteudo de texto
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
        fontSize: 40,
        fontFamily:"Lora_400Regular"
    },
    texto:{
        flexDirection: "column",
        width:"80%",
        alignItems:"flex-end",
        justifyContent:"center"
    },
    primeiraLetra:{
        height:50,
        width:50,
        fontSize:50,
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        fontFamily:"Lora_400Regular"
    },
    textoConteudo:{
        fontSize:15,
        fontFamily:"Lora_400Regular"
    },


    //elenco
    elenco:{
        marginTop:30,
        height:"40%",
        width:"100%",
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    tituloElenco:{
        color:"#ffffff",
        fontSize: 40,
        fontFamily:"Lora_400Regular"
    },
    pessoaElenco:{
        color:"#ffffff",
        fontSize:15,
        fontFamily:"Lora_400Regular"
    },
    elencoScrowll:{
        flexDirection:"row",
        paddingTop: 10,
        padding:20,
        paddingHorizontal:0
        
    },
    elencoImg:{
        width: 150,
        height: 200,
        margin:10,
    },
    personagem:{
        alignItems:"center"
    },

        
    classificacao:{
        marginVertical:20
    },
    classificacaoEstrelas:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginVertical:30
    },
    classificacaoEstrela:{
        marginHorizontal:10
    }
})