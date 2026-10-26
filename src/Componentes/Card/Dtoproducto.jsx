import estiloCarta from './Card.module.css'

export function DtoProducto(producto){
    return(
        <div className={estiloCarta.card}>
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
        </div>
    )
}