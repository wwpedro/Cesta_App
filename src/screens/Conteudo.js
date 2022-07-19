import React from "react";
import {StyleSheet, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native';

import Ionicons from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default function Conteudos() {

    const navigation = useNavigation();

    return (
      
        <View style={estilos.tela}>
            <Ionicons name="ios-construct-sharp" size={50} color="gray"></Ionicons>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <IconFontAwesome name="arrow-left" size={50} color="black" ></IconFontAwesome>
            </TouchableOpacity>
            
        </View>
    );
}

const estilos = StyleSheet.create({
    tela:{
        alignItems:"center",
        justifyContent:"center",
        flex: 1,
        flexDirection: "column"
    }
})