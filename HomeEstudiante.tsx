import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
const HomeEstudiante = ( ) => {
    const navigation = useNavigation();
    const [matricula, setMatricula] = useState('');

    useEffect( () => {
        getData();
    },[]);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData').then(value => {
                if( value != null ) {
                    let user = JSON.parse(value);
                    setMatricula(user.Matricula);
                }
            })  
        } catch (error) {
            console.log(error)
        }
   
    };
    return (
        <View>
            <Text>Hola! Tu matricula es: {matricula}</Text>
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