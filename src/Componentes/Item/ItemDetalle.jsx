import {useEffect, useState}   from 'react';
import { useParams } from 'react-router-dom';
import estiloItem from './Item.module.css'
import { useGetData }  from '../../Repositorio/api.js';

function ItemDetalle(){
    const { data, error, cargando } = useGetData("/Data/Productos.json");
    console.log("estoy en detalle")
    const {id}=useParams();
    if (cargando) return <p>Cargando productos...</p>;
    if (error) {
        console.log("error---:"+error);
        return <p>Error: {error}</p>;
    }
    const item=data.find(p=> p.id==id)
    return (
    <div className="estiloItem.itemDetailContainer">
        <h2>Detalle de {item.nombre}</h2>
        <img className="estiloItem.img" src={item.imagen} alt={nombre} />
        <p><strong>Categoría:</strong> {item.categoria}</p>
        <p><strong>Descripción completa:</strong> {item.descripcion}</p>
        <p><strong>Precio:</strong> ${item.precio}</p>
        <p><strong>Stock disponible:</strong> {item.stock} unidades</p>
       
        <p><strong>Categoria:</strong> {item.categoria} unidades</p>
        <button className='btn btn-principal' onClick={onClose}>Cerrar Detalle</button>
      </div>
    )
}

export default ItemDetalle;