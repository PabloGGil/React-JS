import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config"; // Ajusta la ruta a tu archivo de configuración


// const MostrarProductos = () => { 
//     // Estado para guardar los productos que traigamos de la DB 
// const [productos, setProductos] = useState([]); 

function useGetBD(nombreColeccion) {
    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!nombreColeccion) return;

        let activo = true; // Bandera para evitar fugas de memoria

        const obtenerDatos = async () => {
            setCargando(true);
            setError(null);

            try {
                const colRef = collection(db, nombreColeccion);
                const querySnapshot = await getDocs(colRef);
                
                // Transformamos los documentos de Firestore en un array plano de objetos
                const lista = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                if (activo) {
                    setData(lista);
                }
            } catch (err) {
                console.error("Error al obtener datos de Firestore:", err);
                if (activo) {
                    setError(err.message);
                }
            } finally {
                if (activo) {
                    setCargando(false);
                }
            }
        };

        obtenerDatos();

        return () => {
            activo = false; // Limpieza al desmontar
        };
    }, [nombreColeccion]);

    // Devolvemos un objeto con las propiedades que el componente consumidor necesita
    return { data, cargando, error };
}

function useGetBDxId(nombreColeccion, id) {
    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!nombreColeccion) return;

        let activo = true; // Bandera para evitar fugas de memoria

        const obtenerDatos = async () => {
            setCargando(true);
            setError(null);

            try {
                const docRef = doc(db, nombreColeccion, id);
                const docSnap = await getDoc(docRef);
            
                if (docSnap.exists()) {
                setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                setError("El producto no existe");
                }
            }catch (err) {
                console.error("Error al obtener producto:", err);
                setError("Error al cargar el producto");
            }finally {
                if (activo) {
                    setCargando(false);
                }
            }
        };

        obtenerDatos();

        return () => {
            activo = false; // Limpieza al desmontar
        };
    }, [nombreColeccion]);

    // Devolvemos un objeto con las propiedades que el componente consumidor necesita
    return { data, cargando, error };
}

export default useGetBD;