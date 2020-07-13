import firebase from '@firebase/app';
import '@firebase/firestore'

export default agregarBD = ( name= 'Diego' ) => {
    firebase.firestore().collection('usuarios').add({
        name,
        apellido: 'Ortiz'
    }).then(function(docRef) {
        console.log("Este es el ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error al crear: ", error);
        throw error;
    });
};