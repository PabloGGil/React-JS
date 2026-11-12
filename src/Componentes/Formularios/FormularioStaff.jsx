import estilo from '../Estilos/Formulario.module.css';
import { useState } from 'react';
import {useGetBD,CreateBD, useUpdateBD} from '../../Repositorio/RepoBase';

function FormularioStaff({data,  manejarEnvio, esEdicion}) { 
    const [cargando, setCargando] = useState(false);
    const [datosForm, setDatosForm] = useState(data || estadoInicial);
   
    let staffGuardado=null;
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm(prev => ({...prev,[name]: value,}));
    }

    const envio=async (e)=>{
        setDatosForm(datosForm)
        e.preventDefault();
        console.log("estoy en el puto form boton enviar")
        if (esEdicion) {
          await useUpdateBD( 'staff',datosForm.idx,datosForm)
        //   setProductos(prev => prev.map(p => p.id === productoGuardado.id ? productoGuardado : p));
        //  setProductoGuardado({...datosForm});
        staffGuardado={...datosForm};
        } else {
          const rta = await CreateBD( "staff",datosForm );
 
          if(rta.success){
            alert("¡Carga de persona éxitosa! id:"+ rta.id);
            // setProductoGuardado({...datosForm,idx:rta.id});
            staffGuardado={...datosForm,idx:rta.id};
          }
        }
        // manejarEnvio(productoGuardado, esEdicion);
         manejarEnvio(staffGuardado, esEdicion);
      };
        
    return ( 
        <div className={estilo.formContainer} >
            <form  onSubmit={envio}>              
                <div className={estilo.formGroup}> 
                    <label>Nombre de la persona:</label>
                    <input 
                        type="text" 
                        placeholder="Ej: Andrea" 
                        name="nombre" 
                        value={datosForm.nombre }
                        onChange={manejarCambio} 
                        className={estilo.formControl}
                    /> 
                </div> 
                 <div className={estilo.formGroup}> 
                    <label>Puesto:</label>
                    <input 
                        type="text" 
                        placeholder="Ej: supervisor" 
                        name="puesto" 
                        value={datosForm.puesto}
                        onChange={manejarCambio} 
                        className={estilo.formControl}
                    /> 
                </div> 
                <div className={estilo.formGroup}>  
                    <label>email</label> 
                    <input 
                        type="text" 
                        placeholder="Ej: andrea@gmail.com"
                        name="email"
                        onChange={manejarCambio}
                        value={datosForm.email}
                        className={estilo.formControl}
                    /> 
                </div>
                 <div className={estilo.formGroup}> 
                    <label>Foto de la persona:</label>
                    <input 
                        type="text" 
                        placeholder="Ej: https:\\..." 
                        name="foto" 
                        value={datosForm.foto}
                        onChange={manejarCambio} 
                        className={estilo.formControl}
                    /> 
                </div> 
                
                <button className={estilo.btnSubmit} type="submit" >{cargando
          ? "Procesando..."
          : esEdicion
          ? "Guardar Cambios"
          : "Crear Miembro"}</button> 
            </form> 
        </div>
    )
}

export default FormularioStaff;