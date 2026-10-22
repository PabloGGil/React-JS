import React from "react";
import estiloNav from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useCarrito } from '../../Contexto/CarritoContext';

const NavBar=()=>{
    const { itemsEnCarrito } = useCarrito();
    const totalItems = itemsEnCarrito();
    return (
        <>
        <div className={estiloNav.navbar}>
            <nav>
                <Link to="/cargaMasiva">CargaMasiva</Link>
                <Link to="/">Inicio</Link> 
                <Link to="/productos">Productos</Link> 
                <Link to="/destacados">Destacados</Link> 
                <Link to="/carrito">🛒 {totalItems > 0 &&
                    <span>{totalItems}</span>}
                </Link> 
             
            </nav>
        </div>
        </>
    );
}

export const Brand=({children , logo})=>{
    if (!children && !logo) {
       throw new Error("Brand requiere al menos un texto o un logo.")
    if (children && typeof children !== "string") {
        throw new Error("Brand solo acepta texto como children.")
    }
}
    
    return (
        <>
          {logo && <img src={logo} alt="logo" />}
         {children && <span>{children}</span>}
        </>
      )
}


export const Acciones=()=>{
    return null;
}

export const Accion=()=>{
    return null;
}

export const Nav=()=>{
    return null;
}

export const NavItem=()=>{
    return null;
}

export const Toggler=()=>{
    return null;
}

export default NavBar;