import { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs,doc,query,where, getDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

function useGetData(recurso) {    
        const [cargando, setCargando] = useState(true);
        const [data, setData]=useState([]);
        const [error, setError]=useState("");

        console.log("estoy en el useGet")
        
        useEffect(()=>{
            const cargar = async () => {
            try {

                setCargando(true);
                setError(null);
                    const opciones = {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                        // signal: controller.signal,
                    };
                    const response = await fetch(recurso, opciones);
                    if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }
                    const rta = await response.json();
                    console.log(rta)
                    setData(rta);
                } catch (err) {
                    if (err.name !== "AbortError" && activo) {
                        setError(err.message);
                    }
                }finally {
                    setCargando(false);
                }
            };
        cargar();
            

    },[])
    

    return {data, error, cargando};
}


async function useGetxId(recurso, id) {
    const [productos, setProductos]=useState([]);

    // useEffect(()=>{
    //     const obtenerProductos=async()=>{
    //         const baseRef=collection(db, recurso);
    //         const docs=await getDocs(baseRef)
    //         const lista= docs.docs.map(doc =>({id:doc.id, ...doc.data()}));
    //         setProductos(lista);
    //     }
    //     obtenerProductos();
    // },[]);

  return { producto };
    
}

const obtenerDocumento = async (recurso,id) => {
  const docRef = doc(db, recurso, id); // Referencia directa
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No existe ese documento");
    return null;
  }
};

 
async  function usePostData(recurso,postData){
    try{         
        const opciones= {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(postData), 
                }
        
        const respuesta= await fetch(url, opciones)

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
            console.log(respuesta);
        }
        console.log(respuesta);
        return await respuesta.json();    
    } catch (error) {
        console.log('Error en POST:', error);
        throw error;
    }
    
}
async function useGetBD( tabla){
    const [cargando, setCargando] = useState(true);
    const [data, setData]=useState([]);
    const [error, setError]=useState("");

        console.log("estoy en el useGetBD")
     
        useEffect(()=>{
            let activo = true;
            const cargar = async () => {
                try {
                    
                    const coleccion =  collection(db, tabla);
                    const objetos=await getDocs(coleccion)
                    const lista = objetos.docs.map(doc => ({id: doc.id, ...doc.data()}));
                    if (activo) {
                       setData(lista);
                    }
                    // setData(rta);
                } catch (err) {
                if (activo) {
                    setError(err.message);
                }
            } finally {
                if (activo) {
                    setCargando(false);
                }
            } 
            };
            cargar();        
            return () => {
                activo = false; // Limpieza si el componente se desmonta
            }; 
        },[tabla])
    //  activo = false;
    console.log("data--->" +data)
    return {data, error, cargando};

}

export  {useGetData, usePostData, useGetxId, useGetBD, obtenerDocumento};