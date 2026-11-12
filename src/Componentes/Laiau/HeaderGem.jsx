import { Link } from 'react-router-dom';
import styles from '../Estilos/Header.module.css';

function Header({ user, logout }) {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <h2 className={styles.title}>Tiendas Peibol</h2>
                <span className={styles.subtitle}>El mejor look and feel</span>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
                    
                    {user ? (
                        <>
                            {user.rol === 'admin' && (
                                <li><Link to="/panel" className={styles.navLink}>Panel Admin</Link></li>
                            )}
                            <li className={styles.userGreeting}>¡Hola, {user.email}!</li>
                            <li>
                                <button onClick={logout} className={styles.btnLogout}>Cerrar Sesión</button>
                            </li>
                        </>
                    ) : (
                        /* Botón clásico de inicio de sesión en el header */
                        <li>
                            <Link to="/login" className={styles.btnLoginHeader}>
                                <span>👤</span> Iniciar Sesión
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;