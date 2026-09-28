import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar';
function Header() { 
    return ( 
        <header className={styles.header}> 
            <h3>Bienvenidos a Tiendas Peibol </h3> 
            <h4>La pagina con el mejor luc an fil</h4>
            <NavBar />
        </header> ); 
    } 
    
export default Header;