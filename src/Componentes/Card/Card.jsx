import estiloCarta from './Card.module.css';

import  Contador  from '../Contador/Contador'

function Card({nombre, precio, stock}){
    // const [contador, setContador]=useState(0);

    const btnComprarClick=()=>{
        alert(`Compraste el producto ${nombre}`)
    }

    return(
        
        <div className={estiloCarta.card}>
            <div className={estiloCarta.cardHeader}>
                {nombre}
            </div>
            <div className="card-body">
                <h5 className="card-subtitle">Descripcion</h5>
                <p className='card-text'>Precio: ${precio}</p>
                <p className='card-text'>Stock: {stock}</p>
               
                <Contador />
                <button  onClick={btnComprarClick} className={estiloCarta.boton}>Comprar</button>
            </div>
        </div>
        
    );
}

export default Card;