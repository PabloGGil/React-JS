import {useEffect, useState}    from "react";
// import  ItemList  from "../../Componentes/ItemList/ItemList";

 function useProductos (){
    const [productos, setProductos]=useState([]);
    const [error, setError]=useState(null);
    const [cargando, setCargando]=useState(true);

    useEffect(()=>{
        fetch('/Data/Productos.json')
        .then((respuesta) => { 
            if (!respuesta.ok) throw new Error('No se pudo cargar la información de los productos'); 
                
            return respuesta.json(); 
        }) 
        .then((datos) => { 
            setProductos(datos); 
            console.log(datos)
        }) 
        .catch((error) => setError(error.message) )
        
        .finally(() => { 
            console.log("prod:"+productos)
            setCargando(false); 
        }); 
    }, []);
    
    return ( 
             {productos, error, cargando}
        )
}
export default useProductos;