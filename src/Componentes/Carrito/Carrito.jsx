import React from 'react'; 
import { useCarrito } from '../../Contexto/CarritoContext';
import { Link } from 'react-router-dom';
import boton from '../Botones.module.css';


const Carrito = () => { 
   
    const { carrito, vaciarCarrito, getPrecioTotal, eliminarDelCarrito, incrementarCantidad, decrementarCantidad } = useCarrito();
    if (carrito.length === 0) { 
        return ( 
            <div> 
                <h1>El carrito está vacío</h1> 
                <p>Agrega productos para continuar la compra.</p> 
                <Link to="/productos" className="btn-volver"> 
                    Ver Productos 
                </Link>
            </div> 
        ); 
    }
    
    return ( 
        <div> 
            <h1>Carrito de Compras</h1> 
            {carrito.map(item => (
                <div key={item.id} > 
                    <h4>{item.nombre}</h4> 
                    <img style={{ maxWidth: '400px' }} src={item.imagen} alt="bb" />
                    <p>Cantidad: {item.cantidad}</p> 
                    <p>Precio unitario: ${item.precio}</p> 
                    <p>Subtotal: ${item.precio * item.cantidad}</p> 
                    <button onClick={()=>eliminarDelCarrito(item.id)} className={boton.botonAzul}>Quitar productos</button>
                    <button onClick={() =>decrementarCantidad(item.id)} className={boton.botonAzul}>-</button>
                        <span>{item.cantidad}</span>
                    <button onClick={() =>incrementarCantidad(item.id)}  className={boton.botonAzul}>+</button>
                    {/* <button className={boton.botonAzul}>Cambiar cantidad</button> */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            
          </div>
                </div> ))} 
                <hr /> 
                <h3>Total a pagar: ${getPrecioTotal()}</h3> 
                <button className={boton.botonAzul} onClick={vaciarCarrito}>Vaciar Carrito</button> 
                <Link to="/" onClick={()=>alert("Gracias por comprar")} className={boton.botonAzul}>
                    Finalizar Compra 
                </Link>
        </div>
    ); 
}; 
export default Carrito;