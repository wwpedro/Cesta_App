import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

import Encanto from "../../assets/encanto.jpeg"
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

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
                        <View style={estilos.elencoScrowll}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={estilos.personagem}>
                                    <Image  source={Encanto} style={estilos.elencoImg}/>
                                    <Text>Encanto</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Encanto} style={estilos.elencoImg}/>
                                    <Text>Encanto</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Encanto} style={estilos.elencoImg}/>
                                    <Text>Encanto</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Encanto} style={estilos.elencoImg}/>
                                    <Text>Encanto</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Encanto} style={estilos.elencoImg}/>
                                    <Text>Encanto</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    <View style={estilos.classificacao}>
                        <Text style={estilos.titulo}>Classificação</Text>
                        <View style={estilos.classificacaoEstrelas}>
                            <IconFontAwesome name="star" size={30} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
                        </View>
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
        backgroundColor: "#1A0607",
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
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
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