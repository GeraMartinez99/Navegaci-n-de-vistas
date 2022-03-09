import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
const Configuracion = ( ) => {
    const navigation = useNavigation();
    return (
        <View>
              <Button title="Cambiar Datos"
                color="#2196F3"
                onPress={ () => {
                    navigation.navigate('CambiarDatos')
                }}>
            </Button>
            <Button title="Logout"
                color="#f194ff"
                onPress={ () => {
                    navigation.navigate('Logout')
                }}>
            </Button>
        </View>
    );
}

export default Configuracion;