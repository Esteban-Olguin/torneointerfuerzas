import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (copiada de Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDZakL15RfMm7m7143bjdcvMYr8sJy0dko",
    authDomain: "copa-chots.firebaseapp.com",
    projectId: "copa-chots",
    storageBucket: "copa-chots.appspot.com", // ojo: suele ser appspot.com
    messagingSenderId: "741727367047",
    appId: "1:741727367047:web:bac48e8066c2a3bf9b2d22",
    measurementId: "G-F1C1QVXBET"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);