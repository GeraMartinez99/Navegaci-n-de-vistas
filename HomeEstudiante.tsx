import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
const HomeEstudiante = ( ) => {
    const navigation = useNavigation();
    return (
        <View>
            <Button title="Ver comunicados" 
                onPress={ () => {
                    navigation.navigate('VerComunicados')
                }}>
            </Button>
            <Button title="Escanear Codigo QR" 
                color="#f194ff"
                onPress={ () => {
                    navigation.navigate('EscanearQR')
                }}>
            </Button>
            <Button title="Ajustes/configuración" 
                onPress={ () => {
                    navigation.navigate('Configuracion')
                }}>
            </Button>
        </View>
    );
}

export default HomeEstudiante;