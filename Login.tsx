import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Dimensions, ImageBackground, Touchable, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import CambiarDatos from "./CambiarDatos";

const IniciarSesion = ( ) => {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <Text style={styles.H1}>Bienvenido a CoronaApp</Text>
            
            <ImageBackground 
                source={require('./img/cov.png')}
                style={{height: Dimensions.get('screen').height / 2.5 }}
            >

            </ImageBackground>

            <TouchableOpacity 
                style={styles.button}
                onPress={ () => {
                    navigation.navigate('LoginApp')
                }}
            >
                <Text style={{color: 'white'}}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, {backgroundColor: '#C4DDFF'}]}
                onPress={ () => {
                    navigation.navigate('Registro')
                }}
            >
                <Text style={{color: 'black'}}>Registrarse</Text>
            </TouchableOpacity>

           
        </View>
    );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'space-evenly'
    },

    H1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    button: {
        backgroundColor: '#7FB5FF',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 20
    },
    textButton: {
        color: 'white'
    },
    button_margin: {
        marginTop: 16
      }
});



export default IniciarSesion;