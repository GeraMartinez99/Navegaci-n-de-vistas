import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IniciarSesion from "./Login";
import Registro from "./Registro";
import HomeEstudiante from "./HomeEstudiante";
import HomeAdministrador from "./HomeAdministrador";
import EscanearQR from "./EscanearQR";
import VerComunicados from "./VerComunicados";
import CargarComunicados from "./CargarComunicados";
import Movilidad from "./Movilidad";
import Configuracion from "./Configuración";
import CambiarDatos from "./CambiarDatos";
import Logout from "./Logout";
import LoginApp from "./Login_App";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Iniciar Sesión" 
          component={IniciarSesion} 
        />
        <Stack.Screen name="Registro" component={Registro}/>
        <Stack.Screen name="CambiarDatos" component={CambiarDatos} options={{title: 'Cambiar Datos'}} />
        <Stack.Screen name="VerComunicados" component={VerComunicados} options={{title: 'Ver Comunicados'}} />
        <Stack.Screen name="CargarComunicados" component={CargarComunicados} options={{title: 'Cargar comunicados'}} />
        <Stack.Screen name="EscanearQR" component={EscanearQR} options={{title: 'Escanear QR'}} />
        <Stack.Screen name="HomeEstudiante" component={HomeEstudiante} options={{title: 'Home Estudiante'}} />
        <Stack.Screen name="HomeAdministrador" component={HomeAdministrador} options={{title: 'Home Administrador'}} />
        <Stack.Screen name="Logout" component={Logout} options={{title: 'Logout'}} />
        <Stack.Screen name="Movilidad" component={Movilidad} options={{title: 'Movilidad'}} />
        <Stack.Screen name="Configuracion" component={Configuracion} options={{title: 'Configuración'}} />
        <Stack.Screen name="LoginApp" component={LoginApp} options={{title: 'Iniciar'}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;