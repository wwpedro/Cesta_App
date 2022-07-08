import React from "react";

import {NavigationContainer} from "@react-navigation/native";

import Stack from "./Stack/app"

//colocar todas as rotas entro de navgation
export default function(){
    return(
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    );
}