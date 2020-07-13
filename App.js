import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import firebase from 'firebase';
import { Provider} from 'react-redux'; 

// Las rutas dependen de la ubicacion en el proyecto 
import store from './src/redux/store';

// Importamos la vista de registro
import Registro from './src/vistas/Registro/index';

// Firebase presenta un error con atob por lo cual se instala 
// la siguiente libreria 
import {decode, encode} from 'base-64'

// Definimos las variables paraque funcionen bien y listo 
if (!global.btoa) {
global.btoa = encode;
}

if (!global.atob) {
global.atob = decode;
}
//  Fin de la solucion   --------------------------------  


export default function App() {

  // Creamos una constante con los credenciales que nos da firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBzfbVwyIpBUTP-I9qYckd7HKLj9dU-cg4",
    authDomain: "prueba-39753.firebaseapp.com",
    databaseURL: "https://prueba-39753.firebaseio.com",
    projectId: "prueba-39753",
    storageBucket: "prueba-39753.appspot.com",
    messagingSenderId: "1075352049293",
    appId: "1:1075352049293:web:874c41edf42e9808e5b4c4",
    measurementId: "G-JWVR1K8N8X"
  };

  // solucion del error [DEFAULT] App
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


  return (
    <Provider store={store}>
      { // Esto es un comentario en medio de los componentes 
      // aqui podemos poner nuestros componentes como siempre 
      }
      <Registro />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
