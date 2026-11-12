import React, { useState } from 'react'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from 'react-router-dom'; 
import {useAuth } from '../../Contexto/AutContext';
import estilo from '../Estilos/Login.module.css'
import Modal from '../Formularios/Modal'

const Login = () => { 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate(); 
    const [modalAbierto, setModalAbierto] = useState(false);
        const [tituloModal, setTituloModal] = useState("");
            const [mensajeModal, setMensajeModal] = useState("");
    const { login,logout } = useAuth();
    const handleLogin = (e) => { 
        e.preventDefault(); 
        const auth = getAuth(); 
        // login( email, password)
        signInWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => { 
            const user = userCredential.user; 
            console.log("Usuario logueado:", user); 
            setModalAbierto(true)
            setMensajeModal("¡Inicio de sesión exitoso!")
            setTituloModal("Login")
            // alert(); 
            navigate('/');  
        }) 
        .catch((error) => { 
            const errorCode = error.code; 
            const errorMessage = error.message; 
            console.error("Error en el login:", errorCode, errorMessage); 
            alert("Error: " + errorMessage); 
        }); 
    }; 
    return ( 
<>
    <form onSubmit={handleLogin} className={estilo.form}>
       <p className="form-title">Login </p>
        <div className={estilo.inputContainer}>
          <input 
            type="email" 
            placeholder="email"
            value={email}
            onChange={(evento)=>setEmail(evento.target.value)}
        />
          <span>
          </span>
      </div>
      <div className={estilo.inputContainer}>
          <input 
            type="password" 
            placeholder=" password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
         <button type="submit" className={estilo.submit}>
        Ingresar
      </button>

      <p class={estilo.signupLink}>
        Tiene cuenta?
        <a href="">Registrarse</a>
      </p>
   </form>
<Modal 
                isOpen={modalAbierto} 
                onClose={() => setModalAbierto(false)} 
                titulo={tituloModal}
                mensaje={mensajeModal} 
            />
            </>
    ); 
}; 
export default Login;
