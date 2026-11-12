import React, { createContext, useState, useContext, useEffect } from 'react'; 
import { db } from '../Firebase/config';
import {doc,getDoc} from 'firebase/firestore'
import { Navigate } from 'react-router-dom';
import { 
    getAuth, 
    onAuthStateChanged, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "firebase/auth";

//  1. Crear el contexto 
    export const AuthContext =createContext(); 
    // Hook personalizado 
    export const useAuth = () => { 
        const context = useContext(AuthContext); 
        if (!context) { 
            throw new Error("useAuth debe ser usado dentro de un AuthProvider"); 
        } 
        return context; 
    }; 
    //  Crear el proveedor del contexto 
    export const AuthProvider = ({ children }) => { 
        const [user, setUser] = useState(null); 
        const [loading, setLoading] = useState(true); 
        const auth = getAuth(); // Obtenemos la instancia  

    // Función para registrar un nuevo usuario 
        const signup = (email, password) => { 
            return createUserWithEmailAndPassword(auth, email, password); 
        }; 
        // Función para iniciar sesión 
        const login = (email, password) => { 
            // return signInWithEmailAndPassword(auth, email, password); 
            signInWithEmailAndPassword(auth, email, password) 
                    .then((userCredential) => { 
                        const user = userCredential.user; 
                        console.log("Usuario logueado:", user); 
                        alert("¡Inicio de sesión exitoso!"); 
                        Navigate('/');  
                    }) 
                    .catch((error) => { 
                        const errorCode = error.code; 
                        const errorMessage = error.message; 
                        console.error("Error en el login:", errorCode, errorMessage); 
                        alert("Error: " + errorMessage); 
                    }); 
        };
        // Función para cerrar sesión
        const logout = () => { 
            signOut(auth); 
        }; 
        // Agregamos 'auth' como dependencia del useEfect
        useEffect(() => {
            // onAuthStateChanged detecta cambios en el inicio de la sesion 
            const cambiosSesion = onAuthStateChanged(auth, async (currentUser) => { 
                if (currentUser) { 
                    // si el usuario se logueo, buscamos su rol en Firestore. 
                    const userDocRef = doc(db, "usuarios", currentUser.uid); 
                    const userDocSnap = await getDoc(userDocRef); 
                    if (userDocSnap.exists() && userDocSnap.data().rol === 'admin') {
                        // Si el documento existe y tiene rol de admin, lo asignamos. 
                        setUser({ ...currentUser, 
                            rol: userDocSnap.data().rol , 
                            nombre:userDocSnap.data().nombre, 
                            apellido:userDocSnap.data().apellido
                        }); 
                    } else { 
                        // Para cualquier otro caso, es un usuario regular. 
                        setUser({ ...currentUser, rol: 'user' }); 
                    } 
                } else {  //el usuario cerro sesion
                    setUser(null); 
                } 
                setLoading(false); 
            }
        ); 
        // Limpiamos el observador al desmontar 
        return () => cambiosSesion(); 
    }, [auth, db]); 
// Crear el objeto 'value' con TODAS las funciones definidas 
    const value = { 
        user, 
        loading, // Es buena práctica pasar el estado de carga  
        login, // Ahora 'login' sí existe y se puede pasar logout, 
        logout,
        signup,
    }; // Retornar el Provider, asegurándonos de no renderizar hasta que cargue 
       // Esto evita que los componentes hijos puedan acceder a 'user' cuando es null 
    return ( 
        <AuthContext.Provider value={value}> 
            {!loading && children} 
        </AuthContext.Provider>
    )
}