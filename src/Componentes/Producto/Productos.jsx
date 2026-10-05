import React,{ useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { useGetData } from '../../Repositorio/api';
import Card from "../Card/Card";
import cadorna from '../ItemList/ItemList.module.css'

function Productos({Mensaje}) { 

    const {data:productos,cargando,error}=useGetData('/Data/Productos.json');
    // console.log("en productos"+productos)
    if (cargando) { 
        return <p>Cargando productos, por favor espere...</p>; 
    } 
    if (error) { 
        return <p>Error: {error}</p>; 
    } 
    return ( 
        <div> 
            <h1>{Mensaje}</h1> 
            <div className={cadorna.itemList}>   
            {productos.map(obj => ( <Card key={obj.id} {...obj} /> ))} 
            </div>
        </div> 
        ); 
} 
export default Productos;