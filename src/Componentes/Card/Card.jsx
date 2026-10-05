import estiloCarta from './Card.module.css';
import  Contador  from '../Contador/Contador'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({id, nombre, precio, stock, imagen, descripcion, categoria}){
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const verDetalle = () => {
        setMostrarDetalle(true);
    };
// const{id}=useParams();
console.log({id});
  
    const cerrarDetalle = () => {
        setMostrarDetalle(false);
    };
    const btnComprarClick=()=>{
        alert(`Compraste el producto ${nombre}`)
    }

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
                    <Contador />
                    <button  onClick={btnComprarClick} className={estiloCarta.boton}>Comprar</button>
                </div>
            </div>
        </div>
        
      </>
    );
    
}

export default Card;