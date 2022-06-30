import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View} from 'react-native';

import Detalhes from './componenetes/Detalhes';
import Itens from './componenetes/Itens';

import Topo from './componenetes/Topo';

const width = Dimensions.get('screen').width;

export function Cesta({topo, detalhes, itens}){
    return <ScrollView> 
        <Topo {...topo} />

        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})