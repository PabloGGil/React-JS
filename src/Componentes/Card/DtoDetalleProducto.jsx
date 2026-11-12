import estiloCarta from '../Estilos/Card.module.css'
import {Link} from 'react-router-dom'
import BotonFavorito from '../BotonFavorito'

 function DtoDetalleProducto({producto}){
//    const  producto={...prod};
    return(
        <div className={estiloCarta.card}>
            <div className={estiloCarta.cardHeader}>
                {producto.titulo}
            </div>
            <div  className={estiloCarta.cardBody}>
                <div className="card-body">
                    {/* <Link to={`/producto/${producto.id}`}> */}
                        <img src={producto.imagen} alt="Ejemplo de imagen" />
                    {/* </Link> */}
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Categoria: {producto.categoria}</p>
                    <p className='card-text'>Categoria: {producto.descripcion}</p>
                    <p className='card-text'>Categoria: {producto.calificacion.recuento}</p>
                     
                    <div   >
                        <BotonFavorito />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DtoDetalleProducto;