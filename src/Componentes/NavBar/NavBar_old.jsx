import { useState } from 'react';
import estiloNav from "./NavBar.module.css";
import { Menu } from 'lucide-react';

function NavBar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };
 
    return (
        <>
        <NavContainer>
            <nav className={estiloNav.navbar} >
                <div >
                    <a href="/"></a>
                </div>


        <button class="menuToggle" onClick={toggleMenu} >
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul >
            <li><a href="/">Inicio</a></li>
            <li><a href="/acercaDe">Acerca</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
        </ul>
    </nav>
    </NavContainer>
    </>
  );
}

export default NavBar;