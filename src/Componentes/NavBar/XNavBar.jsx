import estiloNav from '../Estilos/NavBar.module.css';
import { Link } from 'react-router-dom';
import { useCarrito } from '../../Contexto/CarritoContext';
import { useAuth } from "../../Contexto/AutContext";

const NavBar=()=>{
    const { itemsEnCarrito } = useCarrito();
    const totalItems = itemsEnCarrito();
    const {user, logout}=useAuth();
    return (
        <>
        <div className={estiloNav.navbar}>
            <nav>
                {/* <Link to="/mostrar">mostrar bd</Link> */}
                
               {user && user.rol === 'admin' && (
                    <>
                    <Link to="/panel">Panel de administracion</Link> 
                    <Link to="/cargaMasiva">CargaMasiva</Link>  
                    </>
                )}
              
                <Link to="/">Inicio</Link> 
                <Link to="/productos">Productos</Link> 
                {/* <Link to="/destacados">Destacados</Link>  */}
                <Link to="/carrito">🛒 {totalItems > 0 &&
                    <span>{totalItems}</span>}
                </Link> 
                {/* <button className="btn btn-primary" aria-label="Agregar al carrito"> 🛒 Agregar </button> */}
            </nav>
        </div>
        </>
    );
}

export default NavBar;