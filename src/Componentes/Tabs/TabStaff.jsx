import estilos from './Panel.module.css';
import {useGetBD,useDeleteBD} from '../../Repositorio/RepoBase';
import { useState, useEffect } from 'react';
import FormularioStaff from '../Formularios/FormularioStaff';
import spinner from '../Estilos/Spinner.module.css'

const estadoInicial = {
    nombre: "carlos Corso",
    puesto: "gerente",
    email: "ccorso.bna",
    foto: "",
    
};

function TabStaff(){ 
  const {data: staffBD, cargando, error} = useGetBD('staff');
  
  const [staffAEditar, setStaffAEditar] = useState(estadoInicial);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [esEdicion, setEsEdicion]=useState(false);
  const [staffLocal, setStaffLocal] = useState([]);

// Sincronizamos cuando la API trae los datos por primera vez
  useEffect(() => {
    if (staffBD) {
      setStaffLocal(staffBD);
    }
  }, [staffBD]);
    if(cargando)  {
            return (
                <>
             
                <div className={spinner.spinner} style={{ alignContent:'center' }}>
                    <div className={spinner.spinnerin}></div>
                    <p>Cargando datos desde la base de datos...</p>
                </div>
                </>
            );
        }
  const eliminarMiembro = async (idx) => {
    if (!window.confirm(`"¿Está seguro de eliminar ?"`)) return;

    try {
      const resultado = await useDeleteBD( "staff", idx);
      if (resultado.success) {
        setStaffLocal(prev => prev.filter((prod) => prod.idx !== idx));
        alert("Miembro eliminado con éxito");
      }else{
        console.log("error al eliminar el Miembro");
      }
    } catch (error) {
      console.log("Error al eliminar el Miembro:", error);
      alert("Hubo un error al intentar eliminar el miembro del staff." + error);
    }
  };
  
  const handleStaffGuardado =async (staffGuardado, esEdicion) => {
      setStaffLocal(prev => [...prev, staffGuardado]);
      cerrarModal();
    };
    
  const abrirModalAgregar = () => {
    setStaffAEditar(estadoInicial);
    setModalAbierto(true);
  };

  const abrirModalEditar = (staff) => {
    setStaffAEditar(staff);
    setEsEdicion(true);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setStaffAEditar(null);
    setModalAbierto(false);
  };

return(
<section>
    <div className={estilos.sectionHeader}>
    <h3 className={estilos.sectionTitle}>Listado de Personas</h3>
    <button className={estilos.btnPrimary} onClick={abrirModalAgregar}>
        <span>+</span> Agregar Miembro del staff
    </button>
    </div>

    {staffLocal.length === 0 ? (
    <p className={estilos.emptyText}>No hay miembros cargados todavía.</p>
    ) : (
    <div className={estilos.tablaContainer}>
        <table className={estilos.tabla}>
            <thead>
                <tr>
                <th>foto</th>
                <th>Nombre</th>
                <th>Puesto</th>
                <th>email</th>
                <th style={{ textAlign: 'right' }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {staffLocal.map(prod => (
                <tr key={prod.idx}>
                    <td>
                    <img 
                        src={prod.foto || '/rechazado.png' } 
                        alt={prod.nombre} 
                        className={estilos.productImg} 
                    />
                    </td>
                    <td><strong>{prod.nombre}</strong></td>
                    <td>{prod.puesto || '-'}</td>
                    <td>${prod.email}</td>
                    <td style={{ textAlign: 'right' }}>
                    <button 
                        className={estilos.btnOutline} 
                        onClick={() => abrirModalEditar(prod)}
                    >
                        Editar
                    </button>
                    <button 
                        className={estilos.btnDanger} 
                        onClick={()=>eliminarMiembro(prod.idx)}
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
                {staffAEditar ? 'Editar Miembros' : 'Agregar Nuevo Miembro'}
              </h3>
              <button className={estilos.btnClose} onClick={cerrarModal}>✕</button>
            </div>

            <FormularioStaff 
              data={staffAEditar} 
              // setProductoAEditar={setProductoAEditar}
              manejarEnvio={(staffAEditar, esEdicion) => handleStaffGuardado(staffAEditar, esEdicion)} 
              esEdicion={esEdicion}
            />
          </div>
        </div>
      )}

    </section> 

)
}

export default TabStaff; 