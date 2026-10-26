import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { useCarrito } from '../../Contexto/CarritoContext';
import boton from '../Botones.module.css';
import useGetBD from '../../Repositorio/RepoProducto';
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../Firebase/config";

const ProductoDetalle = () => { 
    const { id } = useParams(); 
    const {data: productos, cargando, error} = useGetBD('productos');
    // const [error, setError] = useState(null); // <-- 1. Añadido el estado de error
    // const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(0);

    const { agregarACarrito, getCantidadActual } = useCarrito();
    const cantidadActual = getCantidadActual(id);

    let producto = productos.find((prod) => prod.id == id);
    
    if (cargando) {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <p>Cargando datos desde la base de datos...</p>
            </div>
        );
    }
    // Manejamos posibles errores de red o permisos
    if (error) {
        return <p style={{ color: 'red' }}>Hubo un error al cargar: {error}</p>;
    }

   

    const incrementar = () => setCantidad(cantidad + 1);
    const decrementar = () => { if (cantidad > 0) setCantidad(cantidad - 1); };

    const botonAgregar = () => {
        if (cantidad === 0) {
            alert("Por favor selecciona al menos una cantidad.");
            return;
        }
        agregarACarrito(producto, cantidad);
        alert(`Agregaste ${cantidad} unidad/es de ${producto.titulo} al carrito`);
    };
console.log(producto)
    return ( 
        <div> 
            <h2>Detalle del Producto: {producto.titulo}</h2>
            <img src={producto.imagen} alt={producto.titulo} style={{ maxWidth: '400px' }} /> 
            <h3>${producto.precio}</h3> 
            <p>{producto.descripcion}</p> 

            <div style={{ margin: '5px', padding: '5px', border: '1px solid black' }}> 
                <div style={{ border: '2px solid #ccc', padding: '15px 30px', borderRadius: '8px', textAlign: 'center', display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
                    <button className={boton.botonAzul} onClick={incrementar}> + </button> 
                    <span>{cantidad}</span> {/* <-- Mostramos el estado 'cantidad' local */}
                    <button className={boton.botonAzul} onClick={decrementar}> - </button> 
                </div>
                <button className={boton.botonAzul} onClick={botonAgregar} style={{ marginTop: '10px' }}> 
                    Comprar / Agregar 
                </button> 
            </div>
        </div> 
    ); 
}; 

export default ProductoDetalle;