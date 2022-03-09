import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import CambiarDatos from "./CambiarDatos";

const IniciarSesion = ( ) => {
    const navigation = useNavigation();
    return (
        <View>
            
            <Button 
           
                title="Registrarse"
                color="#2196F3"
                onPress={ () => {
                    navigation.navigate('Registro')
                }}>
            </Button>
            <Button title="Home Administrador"

                color="#f194ff"
                onPress={ () => {
                    navigation.navigate('HomeAdministrador')
                }}>
            </Button>
            <Button title="Home Estudiante"
                color="#2196F3"
                onPress={ () => {
                    navigation.navigate('HomeEstudiante')
                }}>
            </Button>
        </View>
    );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button_margin: {
        marginTop: 16
      }
});



export default IniciarSesion;