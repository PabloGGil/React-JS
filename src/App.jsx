import './App.css';
// import { FormularioContainer } from './Componentes/FormularioContainer/FormularioContainer';
import Laiau from './Componentes/Laiau/Laiau';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
// import formProducto from './Componentes/FormularioProducto/FormularioProducto';
// import producto from './Repositorio/Producto/useProductos'
function App() {
  return (
    <>
      <Routes>
        <Route element={<Laiau />}>
          <Route path='/' element={<h1>Inicio</h1>} />       
          <Route path='/productos' element={<ItemListContainer Mensaje="Todos los Productos " vista="Card" recurso="/Data/Productos.json"/>} />
          <Route path='/destacados' element={<ItemListContainer Mensaje="Productos Destacados " vista="Card" recurso="/Data/Productos.json"/>} />
          <Route path='/contacto' element={<h1>Contacto</h1>} />
          {/* <Route path='/alta' element={<formProducto />} /> */}
        </Route> 
      </Routes>
   
   </>
  )
}

//

export default App
