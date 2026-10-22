import estiloCarta from './Card.module.css';
import  Contador  from '../Contador/Contador'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BotonFavorito from '../BotonFavorito';

// import { useCarrito } from '../../Contexto/CarritoContext';

function Card({id, nombre, precio, stock, imagen, descripcion, categoria}){
    const producto={id, nombre, precio, stock, imagen, descripcion, categoria};
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    
    const verDetalle = () => {
        setMostrarDetalle(true);
    };
 
    
    const [esFavorito, setEsFavorito] = useState(false); 
    const marcarComoFavorito = () => {
                        setEsFavorito(!esFavorito); 
                        };
    
    const cerrarDetalle = () => {
        setMostrarDetalle(false);
    };

    return(
        <>
        <div className={estiloCarta.card}>
            <div className={estiloCarta.cardHeader}>
                {nombre}
            </div>
            <div onClick={verDetalle} className={estiloCarta.cardBody}>
                <div className="card-body">
                    <Link to={`/producto/${id}`}>
                    <img src={imagen} alt="Ejemplo de imagen" />
                    <p className='card-text'>Precio: ${precio}</p>
                    <p className='card-text'>Stock: {stock}</p>
                    </Link>
                    <div   >
                        <BotonFavorito />
                    </div>
                </div>
            </div>
        </div>
        
      </>
    );
    
}

export default Card;