import { useEffect } from "react";
import { useState } from "react";

export  function useGetData(recurso) {
    
        const [cargando, setCargando] = useState(true);
        const [data, setData]=useState([]);
        const [error, setError]=useState("");
    console.log("estoy en el useGet")
        useEffect(()=>{
            const controller = new AbortController();
                let activo = true;
            const cargar = async () => {
                
                setCargando(true);
                setError(null);
                try {
                    const opciones = {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                        signal: controller.signal,
                    };
                    const response = await fetch(recurso, opciones);
                    if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }
                    const rta = await response.json();
                    if (activo) setData(rta);
                } catch (err) {
                    if (err.name !== "AbortError" && activo) {
                        setError(err.message);
                    }
                }finally {
                    setCargando(false);
                }
            };

            cargar();
            return () => {
            activo = false;
            controller.abort();
        };
    },[recurso])


    return {data, error, cargando};
}

export async function postData(recurso,postData){
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