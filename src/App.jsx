import './App.css';
import Laiau from './Componentes/Laiau/Laiau';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import Calesita from './Componentes/Calesita/Calesita';

function App() {
  const imagenes=["./teclado.png", "./mouse.png", "./router.png" ];
  return (
    <>
      <Routes>
        <Route element={<Laiau />}>
          <Route path='/' element={<Calesita imagenes={imagenes} />} / >   
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
