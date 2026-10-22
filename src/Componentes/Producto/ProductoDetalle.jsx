import { useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { useGetData } from '../../Repositorio/api';
import estiloCarta from '../Card/Card.module.css';
import { useCarrito } from '../../Contexto/CarritoContext';
import boton from '../Botones.module.css';

const ProductoDetalle = () => { 
    // const [contador, setContador] = useState(0);
    const { id } = useParams(); 
    const {data, cargando, error}=useGetData('/Data/Productos.json',{id});
    const {agregarACarrito ,getCantidadActual,itemsEnCarrito}=useCarrito();
    const [cantidad, setCantidad]=useState(0);
    const cantidadActual= getCantidadActual(id)

    const producto=data.find(p => p.id === parseInt(id));
    
    // verificar si existe
    if (typeof producto==="undefined") { 
        return <h2 style={{ backgroundColor: 'darkred',text: 'white'  }}>Producto no encontrado</h2>; 
    }

    const botonAgregar=()=> agregarACarrito(producto,cantidad);
    const incrementar = () => setCantidad(cantidad + 1);
    const decrementar = () => { if (cantidad > 0) setCantidad(cantidad - 1); };
    const btnComprarClick=()=>{
        agregarACarrito(producto, cantidad);
        alert(`Compraste el producto ${nombre}`)
    }

    return ( 
        <div> 
            <h2>Detalle del Producto: {producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: '400px' }} /> 
            <h3>${producto.precio}</h3> 
            <p>{producto.descripcion}</p> 
            <div style={{ margin: '5px', padding: '5px', border: '1px solid black' }}> 
                <div style={{ border: '2px solid #ccc', padding: '15x 30px', borderRadius: '8px', textAlign: 'center' ,display:'flex', alignItems: 'center',gap:'15px',justifyContent:'center'}}>
                    <button className={boton.botonAzul} onClick={incrementar}> + </button> 
                    <span>{cantidad}</span>
                    <button className={boton.botonAzul} onClick={decrementar}> - </button> 
                </div>
                 <button className={boton.botonAzul} onClick={botonAgregar}> Comprar </button> 
            </div>
        </div> 
    ); 
}; 
export default ProductoDetalle;