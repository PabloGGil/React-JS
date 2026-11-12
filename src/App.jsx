import './App.css';
import Laiau from './Componentes/Laiau/Laiau';
import { Routes, Route } from 'react-router-dom';
import Calesita from './Componentes/Calesita/Calesita';
import Carrito from './Componentes/Carrito/Carrito';
import Productos from './Componentes/Producto/Productos'
import ProductoDetalle from './Componentes/Producto/ProductoDetalle'
import CargaMasiva from './Firebase/CargaMasiva'
import MostrarProductos from './Componentes/MostrarProd';
import Panel from './Componentes/Panel/Panel';
import Login from './Componentes/Login/Login';
import RutaProtegida from './Componentes/Producto/RutaProtegida';
import Modal from './Componentes/Formularios/Modal'
import { useState } from 'react';
// import DtoDetalleProducto from './Componentes/Card/DtoDetalleProducto';

function App() {
  const imagenes=["./teclado.png", "./mouse.png", "./router.png" ];
  const [isOpen,setIsOpen]=useState(true)
  return (
    <>
      <Routes>
        <Route element={<Laiau />}>
        {/* <Route path="/modal" element={
          <Modal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                title="MiMo dal"
                message="Mensajismo" 
            />
         }/> */}
          <Route 
            path='/cargaMasiva' 
            element={
              <RutaProtegida rolesPermitidos={['admin']}>
                <CargaMasiva />
              </RutaProtegida>
            } />
       
          <Route path='/'             element={<Calesita imagenes={imagenes} />} / >   
          <Route path='/productos'    element={<Productos Mensaje={"Todos los Productos "}/> } />
          <Route path='/producto/:id' element={<ProductoDetalle />} />
          <Route path='/carrito'      element={<Carrito />} />
          <Route path="/login"        element={<Login />} />
          <Route 
            path='/panel' 
            element={
              <RutaProtegida rolesPermitidos={['admin']}>
                <Panel/>
              </RutaProtegida>
            }
            />
          </Route> 
      </Routes>
   
   </>
  )
}

//

export default App
