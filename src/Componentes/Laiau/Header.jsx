// import estilo from './Header.module.css'
import NavBar from '../NavBar/NavBar';
import { useAuth } from "../../Contexto/AutContext";
import { Link } from 'react-router-dom';
import estilo from '../Estilos/XHeader.module.css'

function Header() { 
    const {user, logout}=useAuth();
    return ( 
        <header className={estilo.header}> 
            <div>
                <h3>Bienvenidos a Tiendas Peibol </h3> 
                <h4>La pagina con el mejor luc an fil</h4>
            </div>
 
            <NavBar />
        </header> ); 
    } 
    
export default Header;