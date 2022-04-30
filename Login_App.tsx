import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginApp = () => {
    const navigation = useNavigation();
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const onPressHandler = async () => {
        if(matricula !== '' && password !== '' ){
            Alert.alert('Información', 'Los datos ingresado son correctos.');
  
            try {
                let user = {
                    Matricula: matricula,
                    Password: password
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('HomeEstudiante');
            } catch (error) {
                
            }
        }
        else {
            Alert.alert("Error", "Ningún campo puede estar vacio.");
        }
    }
return (
    <View style={{flex: 1, alignItems: 'center'}}>
        
        <View style={styles.body}>
            <Text style={styles.H1}>Iniciar Sesión</Text>
            <ImageBackground 
                source={require('./img/login.png')}
                style={{height: Dimensions.get('screen').height / 2.5 }}
            >
            </ImageBackground>
            <TextInput 
                style={styles.textInput} 
                placeholder="Tu matricula"
                keyboardType="numeric"
                onChangeText={ (value) => setMatricula(value)}
            >
            </TextInput>
            <TextInput 
                style={styles.textInput} 
                placeholder="Tu contraseña"
                secureTextEntry
                onChangeText={ (value) => setPassword(value)}
            >
            </TextInput>
            <TouchableOpacity 
                style={styles.button}
                onPress={onPressHandler}
            >
                <Text style={styles.textButton}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
        
        
    </View>
    
);
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        width: '80%'
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
    textInput: {
        backgroundColor: '#C4DDFF',
        borderRadius: 20
    }
});


export default LoginApp;