import {useEffect, useState}    from "react";
import { ItemList } from "../../Componentes/ItemList/ItemList";

export function Staff ({mensaje}){
    const [staff, setStaff]=useState([]);
    const [error, setError]=useState(null);
    const [cargando, setCargando]=useState(true);

    useEffect(()=>{
        fetch('/Data/Nosotros.json')
        .then((respuesta) => { 
            if (!respuesta.ok) { 
                throw new Error('No se pudo cargar la información del Staff'); 
            } 
            return respuesta.json(); 
        }) 
        .then((datos) => { 
            setStaff(datos); 
        }) 
        .catch((error) => {
             setError(error.message); 
        }) 
        .finally(() => { 
            setCargando(false); 
        }); 
    }, []);

    if (cargando) { 
        return <p>Cargando Staff, por favor espere...</p>; 
    } if (error) { 
        return <p>Error: {error}</p>; 
    }
    return ( 
        <div> 
            < ItemList staff={staff}/>
        </div>
        )
}
