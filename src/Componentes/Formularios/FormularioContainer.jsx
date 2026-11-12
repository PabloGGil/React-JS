import React, {useState} from 'react';
import FormularioProducto  from './FormularioProducto';
import estilo from '../Estilos/Formulario.module.css'

export function FormularioContainer(){
    const [datosForm, setDatosForm]=useState({
            id:"",
            titulo: "",
            precio: "",
            descripcion: "",
            categoria: "",
            imagen:"",
            stock: "",  
    });

    const [cargando, setCargando]=useState(false);
    const [imagenFile, setImagenFile]=useState(null);

    const manejarCambioImagen=(evento)=>{
        setImagenFile(evento.target.files[0]);
    }

    const manejarCambio=(evento)=>{
        const {name, value}=evento.target;
        setDatosForm({
            ...datosForm, [name]:value
        });
    }

    
    return(
        
        <FormularioProducto
            datosForm={datosForm}
            // manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            // manejarCambioImagen={manejarCambioImagen} 
            cargando={cargando}
        />
       
    );
}
export default FormularioContainer