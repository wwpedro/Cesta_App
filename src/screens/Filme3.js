import React from "react";
import { Image, ScrollView, StyleSheet, Text, View,Linking } from "react-native";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lora_400Regular } from '@expo-google-fonts/lora';

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Ritimo from "../../assets/Ritimo/ritimo.jpg"
import Emilia from "../../assets/Ritimo/EmiliaJones.jpg"
import DanielDurant from "../../assets/Ritimo/DanielDurant.jpg"
import EugenioDerbez from "../../assets/Ritimo/EugenioDerbez.jpg"
import FerdiaWalsh_Peelo from "../../assets/Ritimo/FerdiaWalsh_Peelo.jpg"
import MarleeMatlin from "../../assets/Ritimo/MarleeMatlin.jpg"
import TroyKotsur from "../../assets/Ritimo/TroyKotsur.jpg"

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
                    <Image  source={Ritimo} style={estilos.imagemCapa} />
                    <View style={estilos.imagemCapaConteudo}>
                        <IconFontAwesome onPress={()=>navigation.goBack()} name="arrow-left" size={20} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
                    </View>    
                </View>
                <View style={estilos.conteudoView}>
                    <View style={estilos.sobreFilme}>
                        <Text style={estilos.titulo}>
                            No Ritmo do Coração
                        </Text>
                        <View style={estilos.texto}>            
                            <Text style={estilos.textoConteudo}>
                                <Text style={estilos.primeiraLetra}>N</Text>
                                o Ritmo do Coração conta a história de uma família com 
                                deficiência auditiva que comanda um negócio de pesca em 
                                Gloucester, nos Estados Unidos. Ruby (Emilia Jones), a 
                                única pessoa da família que escuta, ajuda os pais e o 
                                irmão surdo com as atividades do dia-a-dia. Mas por conta 
                                disso, ela é vista como alguém estranha em sua escola, 
                                isso até ela se juntar ao coral, onde acaba se envolvendo 
                                romanticamente com um de seus colegas e começa a fazer 
                                amizades. Com o tempo, ela percebe que tem uma grande 
                                paixão por cantar e seu professor a encoraja a tentar 
                                entrar em uma escola de música, já que sua voz é linda. 
                                Enquanto isso, sua família luta para pagar as contas com 
                                o negócio de pesca, pois novas taxas e sanções são impostas 
                                pelo conselho local. A jovem, então, treina para ser aceita 
                                na faculdade de Berklee, onde poderá seguir com o canto, mas 
                                ela precisa decidir entre continuar ajudando sua família ou 
                                ir atrás de seus sonhos.
                            </Text>
                            <MaterialCommunityIcons name="movie-filter" size={30} color="blck" onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=vVU2ixNLOt8');}} ></MaterialCommunityIcons>
                        </View>
                    </View>

                    <View style={estilos.elenco}>
                        <Text style={estilos.tituloElenco}>Personagens</Text>
                        <View style={estilos.elencoScrowll}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={estilos.personagem}>
                                    <Image  source={Emilia} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Emilia Torn</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={DanielDurant} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Daniel Durant</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={EugenioDerbez} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Eugenio Derbez</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={FerdiaWalsh_Peelo} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Ferdia Walsh-Peelo</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={MarleeMatlin} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Marlee Matlin</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={TroyKotsur} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Troy Kotsur</Text>
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
        marginTop:"10%"
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
        height:"30%",
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