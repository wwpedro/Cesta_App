import React from 'react';
import { StyleSheet, Dimensions, FlatList, View} from 'react-native';
import Texto from '../../componentes/Texto';

import Detalhes from './componenetes/Detalhes';
import Itens from './componenetes/Itens';

import Topo from './componenetes/Topo';

const width = Dimensions.get('screen').width;

export function Cesta({topo, detalhes, itens}){
    return <>
        <FlatList 
            data={itens.lista}
            renderItem={Itens}
            keyExtractor={({nome})=>nome}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo }</Texto>
                    </View>
                </>
            }} 
        /> 
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    titulo:{
        color:"#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    }
})