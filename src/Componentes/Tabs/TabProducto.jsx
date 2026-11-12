import estilos from './Panel.module.css';
import {useGetBD,useDeleteBD} from '../../Repositorio/RepoBase';
import { useState, useEffect } from 'react';
import FormularioProducto from '../Formularios/FormularioProducto';
import spinner from '../Estilos/Spinner.module.css'
import { Container, Row, Col,  Button } from 'react-bootstrap';
// import loader from '../Loader.jsx'

 const estadoInicial={ 
  titulo: "",
  categoria: "zz",
  descripcion: "erer",
  precio: 1000,
  imagen:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
  stock:20
  };  

function TabProducto(){ 
 
  
  const {data: productosBD, cargando, error} = useGetBD('productos');
  
  const [productoAEditar, setProductoAEditar] = useState(estadoInicial);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [esEdicion, setEsEdicion]=useState(false);

  const [productos, setProductosLocales] = useState([]);
 
// Sincronizamos cuando la API trae los datos por primera vez
  useEffect(() => {
    if (productosBD) {
      setProductosLocales(productosBD);
    }
  }, [productosBD]);
    // if(cargando) return ( <div> cargando ...</div> )
  
  if(cargando)  {
            return (
                <>
                  <div className={spinner.container}>
                    <div className={spinner.spinner} >
                      <div className={spinner.spinnerin}></div>
                    </div>
                  </div>
                </>
            );
        }
  const eliminarProducto = async (idx) => {
    if (!window.confirm(`"¿Está seguro de eliminar ?"`)) return;

    try {
      const resultado = await useDeleteBD( "productos", idx);
      if (resultado.success) {
        setProductosLocales(prev => prev.filter((prod) => prod.idx !== idx));
        alert("Producto eliminado con éxito");
      }else{
        console.log("error al eliminar un producto");
      }
    } catch (error) {
      console.log("Error al eliminar el producto:", error);
      alert("Hubo un error al intentar eliminar el producto." + error);
    }
  };
  
  const handleProductoGuardado =async (productoGuardado, esEdicion) => {
      setProductosLocales(prev => [...prev, productoGuardado]);
      cerrarModal();
    };
    
  const abrirModalAgregar = () => {
    setProductoAEditar(estadoInicial);
    setModalAbierto(true);
  };

  const abrirModalEditar = (producto) => {
    setProductoAEditar(producto);
    setEsEdicion(true);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setProductoAEditar(null);
    setModalAbierto(false);
  };

return(
<section>
  {/* <Container className={estilo.container}> */}
              
    <div className={estilos.sectionHeader}>
    <h3 className={estilos.sectionTitle}>Listado de Productos</h3>
    <button className={estilos.btnPrimary} onClick={abrirModalAgregar}>
        <span>+</span> Agregar Producto
    </button>
    </div>

    {productos.length === 0 ? (
    <p className={estilos.emptyText}>No hay productos cargados todavía.</p>
    ) : (
    <div className={estilos.tablaContainer}>
        <table className={estilos.tabla}>
            <thead>
                <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th style={{ textAlign: 'right' }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(prod => (
                <tr key={prod.idx}>
                    <td>
                    <img 
                        src={prod.imagen || '/rechazado.png' } 
                        alt={prod.titulo} 
                        className={estilos.productImg} 
                    />
                    </td>
                    <td><strong>{prod.titulo}</strong></td>
                    <td>{prod.categoria || '-'}</td>
                    <td>${prod.precio}</td>
                    <td style={{ textAlign: 'right' }}>
                    <button 
                        className={estilos.btnOutline} 
                        onClick={() => abrirModalEditar(prod)}
                    >
                        Editar
                    </button>
                    <button 
                        className={estilos.btnDanger} 
                        onClick={()=>eliminarProducto(prod.idx)}
                    >
                        Eliminar
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    )}
      {modalAbierto && (
        <div className={estilos.modalOverlay} onClick={cerrarModal}>
          <div className={estilos.modalContent} onClick={e => e.stopPropagation()}>
            <div className={estilos.modalHeader}>
              <h3 className={estilos.sectionTitle}>
                {productoAEditar ? 'Editar Producto' : 'Agregar Nuevo Producto'}
              </h3>
              <button className={estilos.btnClose} onClick={cerrarModal}>✕</button>
            </div>

            <FormularioProducto 
              data={productoAEditar} 
              // setProductoAEditar={setProductoAEditar}
              manejarEnvio={(producto, esEdicion) => handleProductoGuardado(producto, esEdicion)} 
              esEdicion={esEdicion}
            />
          </div>
        </div>
      )}

    </section> 

)
}

export default TabProducto; 