import estilo from '../Estilos/Card.module.css'
import {Link} from 'react-router-dom'
import BotonFavorito from '../BotonFavorito'

export function DtoProducto({producto}){
//    const  producto={...prod};
    return(
        <div className={estilo.card}>
            <div className={estilo.cardHeader}>
                {producto.titulo}
            </div>
            <div  className={estilo.cardBody}>
                {/* <div className="card-body"> */}
                    <Link to={`/producto/${producto.idx}`}>
                    <img src={producto.imagen} alt="Ejemplo de imagen" />
                    <p className={estilo.cardText}>Precio: ${producto.precio}</p>
                    <p className={estilo.cardText}>Categoria: {producto.categoria}</p>
                    </Link> 
                    <div>
                        <BotonFavorito />
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}