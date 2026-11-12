import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CarritoProvider } from './Contexto/CarritoContext.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext, AuthProvider } from './Contexto/AutContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
     <AuthProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
     </AuthProvider>  
    </BrowserRouter>
   
  </StrictMode>,
)
