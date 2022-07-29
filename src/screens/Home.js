import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, ScrollView, Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import AppLoading from 'expo-app-loading';
import { useFonts, Lora_400Regular } from '@expo-google-fonts/lora';

import Capa from "../../assets/OscarCapa.png";
import Encanto from "../../assets/Encanto/encanto.jpeg";
import Ritimo from "../../assets/Ritimo/ritimo.jpg";
import Car from "../../assets/Drive/car.jpg";
import Summer from "../../assets/Summer/summer.jpg";
import Queen from "../../assets/Queen/queen.jpg";
import Wiper from "../../assets/Wiper/wiper.jpg";
import Bye from "../../assets/Bye/bye.jpg";

export default function Home() {
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
                <Image  source={Capa} style={estilos.capa} />
                <Text style={estilos.texto}>Os Filmes que ganharam a Premiação Oscars 2022</Text>
                
                <TouchableOpacity onPress={()=>navigation.navigate("Filme1")}>
                    <View style={estilos.cartao}>
                        <Image  source={Encanto} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                        <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>Encanto</Text>
                        </View>    
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("Filme2")}>
                    <View style={estilos.cartao}>
                        <Image  source={Ritimo} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                            <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>No Ritmo do Coração</Text>
                        </View>    
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={()=>navigation.navigate("Filme3")}>
                    <View style={estilos.cartao}>
                        <Image  source={Car} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                            <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>Drive My Car (Japão)</Text>
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("Conteudo")}>
                    <View style={estilos.cartao}>
                        <Image  source={Summer} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                            <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>Summer of Soul</Text>
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("Conteudo")}>
                    <View style={estilos.cartao}>
                        <Image  source={Queen} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                            <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>The Queen of Basketball</Text>
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("Conteudo")}>
                    <View style={estilos.cartao}>
                        <Image  source={Wiper} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                            <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>The Windshield Wiper</Text>
                        </View>    
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("Conteudo")}>
                    <View style={estilos.cartao}>
                        <Image  source={Bye} style={estilos.imagemCartao} />
                        <View style={estilos.imagemCartaoInterno}>
                            <IconFontAwesome name="film" size={30} color="#ffffff"></IconFontAwesome>
                            <Text style={estilos.textoBranco}>The Long Goodbye</Text>
                        </View>    
                    </View>
                </TouchableOpacity>
            
            </View>

        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    scrow:{
        backgroundColor: "#ffffff" 
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
        color: "#A9A9A9",
        fontFamily:"Lora_400Regular",
        marginBottom: 30
    },
    textoBranco:{
        color: "#ffffff",
        fontFamily:"Lora_400Regular",
        padding:5,
        textAlign: "center"
    },
    cartao:{
        height: 150,
        width: "90%",
        marginBottom: 40,
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
        justifyContent:"center",
        
    },
    botao:{
        padding:20,
        margin:30,
        backgroundColor: "#D4D4D4"
    }
})