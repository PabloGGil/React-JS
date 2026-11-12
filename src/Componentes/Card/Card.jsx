import estiloCarta from '../Estilos/Card.module.css';
// import  Contador  from '../Contador/Contador'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BotonFavorito from '../BotonFavorito';
import { DtoProducto } from './Dtoproducto';

// import { useCarrito } from '../../Contexto/CarritoContext';

function Card({children}){
    // const producto={...data};
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
        {/* <div className={estiloCarta.card}>
            <div className={estiloCarta.cardHeader}>
                {producto.titulo}
            </div>
            <div onClick={verDetalle} className={estiloCarta.cardBody}>
                <div className="card-body">
                    <Link to={`/producto/${producto.id}`}>
                    <img src={producto.imagen} alt="Ejemplo de imagen" />
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Categoria: {producto.categoria}</p>
                    </Link>
                    <div   >
                        <BotonFavorito />
                    </div>
                </div>
            </div>
        </div> */}
        <div className={estiloCarta}>
            {children}
        </div>
        {/* <DtoProducto producto={producto}/> */}
      </>
    );
    
}

export default Card;