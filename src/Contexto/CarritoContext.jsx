import React,{useContext, useState, createContext} from "react";

export const CarritoContext=createContext();

export const useCarrito=()=>{
    const contexto=useContext(CarritoContext);
    if(!contexto){
        throw new Error("este hook debe ser usado dentro de un cart Provider");
    }
    return contexto;
};

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]); 
    console.log("Carrito--> "+carrito)
    

    const itemsEnCarrito = () => {
        return carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    };

    const agregarACarrito = (producto, cantidad) => { 
        const itemEnCarrito = carrito.find(item => item.id === producto.id); 
        if (itemEnCarrito) { 
            const carritoActualizado = carrito.map(item => 
                item.id === producto.id 
                ? { ...item, cantidad: item.cantidad + cantidad}
                : item 
            );

            setCarrito(carritoActualizado); 
        } else { 
            setCarrito(prevCart => [...prevCart, { ...producto, cantidad }]); 
        } 
    }; 

    const getCantidadActual = (productoId) => {
         const item = carrito.find(item => item.id === productoId); 
         return item ? item.cantidad : 0; 
    };

    const vaciarCarrito=()=>{
        setCarrito([]); 
    }; 
    
    const getCantProducto = () => { 
        return carrito.reduce((acu, item) => acu + item.cantidad, 0); 
    }; 
    
    const getPrecioTotal = () => { 
        return carrito.reduce((acu, item) => acu + item.precio * item.cantidad, 0); 
    }; 
    
    const eliminarDelCarrito=(id)=>{
        const carritoActualizado=carrito.filter(item =>item.id!=id);
        setCarrito(carritoActualizado);
    }
    const incrementarCantidad=(id)=>{
        const carritoActualizado=carrito.filter((item) => item.id===id ? item.cantidad++:item);
        setCarrito(carritoActualizado);
    }

    const decrementarCantidad=(id)=>{
        const carritoActualizado=carrito.filter((item) => item.id===id ? item.cantidad--:item);
        setCarrito(carritoActualizado);
    }
    return ( 
        <CarritoContext.Provider value={{ 
            incrementarCantidad,
            decrementarCantidad,
            eliminarDelCarrito,
            itemsEnCarrito,
            carrito, 
            agregarACarrito, 
            vaciarCarrito , 
            getCantidadActual, 
            getCantProducto, 
            getPrecioTotal }}
            > 
            {children} 
        </CarritoContext.Provider> 
    )

}

