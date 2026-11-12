import { useState, useEffect } from 'react';
import { collection, getDocs,addDoc,doc, deleteDoc,updateDoc } from "firebase/firestore";
import { db } from "../Firebase/config"; // Ajusta la ruta a tu archivo de configuración


// const MostrarProductos = () => { 
//     // Estado para guardar los productos que traigamos de la DB 
// const [productos, setProductos] = useState([]); 

function useGetBD(tabla) {
    const [cargando, setCargando] = useState(true);
    const [data, setData]=useState([]);
    const [error, setError]=useState("");

        // console.log("estoy en el useGetBD")
     
        useEffect(()=>{
            // let activo = true;
            const cargar = async () => {
                try {
                    
                    const coleccion =  collection(db, tabla);
                    const objetos=await getDocs(coleccion)
                    
                    const lista = objetos.docs.map(doc => ({...doc.data(),idx: doc.id}));
                       
                    // console.log("lista en usegetbd");
                    // console.log(lista)
                    // if (activo) {
                       setData(lista);
                    // }
                   
                } catch (err) {
                // if (activo) {
                    setError(err.message);
                // }
            } 
            finally {
               
                    setCargando(false);
               
            } 
            };
            cargar();        
            // return () => {
            //     activo = false; // Limpieza si el componente se desmonta
            // }; 
        },[tabla])
    //  activo = false;
    console.log("data antes de  retornar usegetBd")
    console.log(data)
     return {data, error, cargando};
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

async function CreateBD(tabla,datosAGuardar){
    
    try{
        console.log(datosAGuardar)
        // const docRef = await addDoc(collection(db, 'productos'), datosAGuardar);
        const docRef=await addDoc(collection(db, tabla), datosAGuardar);
        return ({success: true, id: docRef.id});
    }catch(err){
        return ({success: false, error: err.message});
    }
}
async function useUpdateBD( tabla, id,data){
    console.log("estoy en el useUpdate")
   
    try {
        const docRef = doc(db, tabla, id);
        await updateDoc(docRef, data);
        return { success: true };
    } catch (error) {
        console.error("Error al guardar el objeto editado:", error);
        return { success: false, error: error.message };
    }
}

 async function useDeleteBD( tabla, id){
    console.log("estoy en el useDeleteBD")
    // id=id.toString();
    try {
        
        await deleteDoc(doc(db, tabla, id));
        return { success: true };
    } catch (error) {
        console.error("Error al eliminar:", error);
        return { success: false, error: error.message };
    }
}
export {useGetBD,CreateBD,useDeleteBD, useUpdateBD};