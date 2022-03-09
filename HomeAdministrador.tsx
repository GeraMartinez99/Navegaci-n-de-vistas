import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";

const HomeAdministrador = ( ) => {
    const navigation = useNavigation();
    return (
        <View>
            <Button title="Cargar Comunicados" 
                onPress={ () => {
                    navigation.navigate('CargarComunicados')
                }}>
            </Button>
            <Button title="Escanear Codigo QR" 
            color="#f194ff"
                onPress={ () => {
                    navigation.navigate('EscanearQR')
                }}>
            </Button>
            <Button title="Control de movilidad de estudiantes" 
                onPress={ () => {
                    navigation.navigate('Movilidad')
                }}>
            </Button>
        </View>
    );
}

export default HomeAdministrador;