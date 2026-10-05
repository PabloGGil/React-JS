import './App.css';
import Laiau from './Componentes/Laiau/Laiau';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import Calesita from './Componentes/Calesita/Calesita';
import ItemDetalle from './Componentes/Item/ItemDetalle';
import Carrito from './Componentes/Carrito/Carrito';
import Productos from './Componentes/Producto/Productos'
import ProductoDetalle from './Componentes/Producto/ProductoDetalle'

function App() {
  const imagenes=["./teclado.png", "./mouse.png", "./router.png" ];
  return (
    <>
      <Routes>
        <Route element={<Laiau />}>
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
