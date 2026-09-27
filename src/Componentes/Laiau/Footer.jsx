import styles from './Footer.module.css'
import  ItemListContainer from '../ItemListContainer/ItemListContainer';
function Footer() { 
    return ( 
        <footer className={styles.footer}> 
        <h3>Equipo de desarrollo</h3>
        <ItemListContainer Mensaje="" vista="" recurso="/Data/Nosotros.json" />
      
        <p>&copy; 2026 - Ing. Pablo G. Gil</p> 
        </footer> ); 
} 
export default Footer;