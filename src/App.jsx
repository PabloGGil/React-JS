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

function App() {
  const imagenes=["./teclado.png", "./mouse.png", "./router.png" ];
  return (
    <>
      <Routes>
        <Route element={<Laiau />}>
          <Route path='/cargaMasiva' element={<CargaMasiva />} />
          <Route path='/mostrar' element={<MostrarProductos />} />
          <Route path='/panel' element={<Panel/>}/>
          <Route path='/' element={<Calesita imagenes={imagenes} />} / >   
          <Route path='/productos' element={<Productos Mensaje={"Todos los Productos "}/> } />
          <Route path='/producto/:id' element={<ProductoDetalle />} />
          <Route path='/contacto' element={<h1>Contacto</h1>} />
          <Route path='/carrito' element={<Carrito />} />
          {/* <Route path='/alta' element={<formProducto />} /> */}
        </Route> 
      </Routes>
   
   </>
  )
}

//

export default App
