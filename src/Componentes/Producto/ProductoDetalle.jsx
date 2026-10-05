import { useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { useGetData } from '../../Repositorio/api';

const ProductoDetalle = () => { 
    const { id } = useParams(); 
 
    const {data, cargando, error}=useGetData('/Data/Productos.json',{id});
 
    const producto=data.find(p => p.id === parseInt(id));
    // verificar si lo encuentro
    if (typeof producto==="undefined") { 
        return <h2 style={{ backgroundColor: 'darkred',text: 'white'  }}>Producto no encontrado</h2>; 
    } 
     
    return ( 
        <div> 
            <h2>Detalle del Producto: {producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: '400px' }} /> 
            <h3>${producto.precio}</h3> 
            <p>{producto.descripcion}</p> 
        </div> 
    ); 
}; 
export default ProductoDetalle;