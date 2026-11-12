import estiloNav from '../Estilos/NavBar.module.css';
import { Link } from 'react-router-dom';
import { useCarrito } from '../../Contexto/CarritoContext';
import { useAuth } from "../../Contexto/AutContext";
// Importamos iconos de react-icons (asegúrate de tenerla instalada: npm i react-icons)
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const NavBar = () => {
    const { itemsEnCarrito } = useCarrito();
    const totalItems = itemsEnCarrito();
    const { user, logout } = useAuth();

    return (
        <div className={estiloNav.navbar}>
            <nav className={estiloNav.navContainer}>
                {/* Enlaces de Administrador */}
                {user && user.rol === 'admin' && (
                    <>
                        <Link to="/panel">Panel de administración</Link> 
                        <Link to="/cargaMasiva">Carga Masiva</Link>  
                    </>
                )}
            
                <Link to="/">Inicio</Link> 
                <Link to="/productos">Productos</Link> 
                
                <Link to="/carrito">
                    🛒 {totalItems > 0 && <span>{totalItems}</span>}
                </Link> 

               <div className={estiloNav.authContainer}>
                    {user ? (
                        <div className={estiloNav.userLogged}>
                            <span className={estiloNav.userName}>
                                <FaUser /> {user.nombre || user.email || 'Mi Cuenta'} {user.apellido}
                            </span>
                            <button onClick={logout} className={estiloNav.btnLogout} title="Cerrar sesión">
                                <FaSignOutAlt />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className={estiloNav.loginBtn}>
                            <FaSignInAlt /> Iniciar Sesión
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;