import './App.css';
// import { FormularioContainer } from './Componentes/FormularioContainer/FormularioContainer';
// import Laiau from './Componentes/Laiau/Laiau';
// import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
// import { Routes, Route } from 'react-router-dom';
// import formProducto from './Componentes/FormularioProducto/FormularioProducto';
import producto from './Repositorio/Producto/useProductos.jsx'

import {useGetData} from './Repositorio/api.js'
function  App( ){
  const {data, error, cargando}= useGetData("/Data/Productos.json")
  console.log("data:", data, "error:", error, "cargando:", cargando);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

//

export default App
