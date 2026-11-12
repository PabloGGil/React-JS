import { useState, useEffect } from 'react';
import { db } from '../../Firebase/config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import FormularioContainer from '../Formularios/FormularioContainer';
// import Cupon from '../components/Cupon';
import estilos from './Panel.module.css';
// import {useGetFB_BD, useDeleteFB_BD } from '../../Repositorio/api';
import TabProducto from '../Tabs/TabProducto';
import TabStaff from '../Tabs/TabStaff';


const Panel = () => {
  const [tabActivo, setTabActivo] = useState('productos');
  // const [modalAbierto, setModalAbierto] = useState(false);

  // const [cargando, setCargando] = useState(true);
  // const [data, setData]=useState([]);
  // const [error, setError]=useState("");
  // const [productos, setProductos] = useState([]);
         
       


  const abrirModalAgregar = () => {
    setProductoAEditar(null);
    setModalAbierto(true);
  };

  const abrirModalEditar = (producto) => {
    setProductoAEditar(producto);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setProductoAEditar(null);
    setModalAbierto(false);
  };

  
// setModalAbierto(true)
  return (
    <div className={estilos.container}>
      <h2 className={estilos.title}>Panel de Administración</h2>

      {/* TABS para ABM de cada objeto */}
      <div className={estilos.tabs}>
        <button 
          className={`${estilos.tab} ${tabActivo === 'productos' ? estilos.activeTab : ''}`}
          onClick={() => setTabActivo('productos')}
        >
          Productos
        </button>
        <button 
          className={`${estilos.tab} ${tabActivo === 'cupones' ? estilos.activeTab : ''}`}
          onClick={() => setTabActivo('cupones')}
        >
          Cupones
        </button>
        <button 
          className={`${estilos.tab} ${tabActivo === 'staff' ? estilos.activeTab : ''}`}
          onClick={() => setTabActivo('staff')}
        >
          Staff
        </button>
      </div>

      {/* Contenido según la pestaña activa */}
      {tabActivo === 'productos' && (<TabProducto /> )}

      {tabActivo === 'cupones' && (<section>Cupon </section>
      )}

      {tabActivo === 'staff' && (<TabStaff /> )}


    </div>
  );
};

export default Panel;