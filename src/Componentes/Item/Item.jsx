import estilo from './Item.module.css'
import {Link } from 'react-router-dom'
 
function Item({ id, nombre, precio, stock, imagen, descripcion, categoria, onClose }) { 
    // console.log(props);
    return ( 
        <div className={estilo.item}> 
            <h3>{nombre}</h3> 
            <Link to={`/producto/${id}`}>
            <p>Precio: ${precio}</p> 
            <p>Stock disponible: {stock}</p> 
            <img src={imagen} alt="imagen no disponible" /> 
            </Link>
            <button onClick="onClose" >cerrar</button>
        </div> 
    );
 }
 export default Item;