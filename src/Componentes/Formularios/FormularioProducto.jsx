import estilo from '../Estilos/Formulario.module.css';
import { useState } from 'react';
import {useGetBD,CreateBD, useUpdateBD} from '../../Repositorio/RepoBase';

const estadoInicial = {
    titulo: "",
    precio: 100,
    descripcion: "zz top",
    categoria: "zamudio",
    imagen:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    stock: "200",  
};

function FormularioProducto({data,  manejarEnvio, esEdicion}) { 
    const [cargando, setCargando] = useState(false);
    const [datosForm, setDatosForm] = useState(data || estadoInicial);
    // const [productoGuardado, setProductoGuardado]=useState(null);
    let productoGuardado=null;
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm(prev => ({...prev,[name]: value,}));
    }

    const envio=async (e)=>{
        setDatosForm(datosForm)
        e.preventDefault();
        console.log("estoy en el puto form boton enviar")
        if (esEdicion) {
          await useUpdateBD( datosForm)
        //   setProductos(prev => prev.map(p => p.id === productoGuardado.id ? productoGuardado : p));
        //  setProductoGuardado({...datosForm});
        productoGuardado={...datosForm};
        } else {
          const rta = await CreateBD( datosForm );
 
          if(rta.success){
            alert("¡Carga de producto éxitosa! id:"+ rta.id);
            // setProductoGuardado({...datosForm,idx:rta.id});
            productoGuardado={...datosForm,idx:rta.id};
          }
        }
        // manejarEnvio(productoGuardado, esEdicion);
         manejarEnvio(productoGuardado, esEdicion);
      };
        
    return ( 
        <div className={estilo.formContainer} >
            <form  onSubmit={envio}>              
                <div className={estilo.formGroup}> 
                    <label>Titulo del Producto:</label>
                    <input 
                        type="text" 
                        placeholder="Ej: Teclado inalambrico" 
                        name="titulo" 
                        value={datosForm.titulo }
                        onChange={manejarCambio} 
                        className={estilo.formControl}
                    /> 
                </div> 
                 <div className={estilo.formGroup}> 
                    <label>Categoria:</label>
                    <input 
                        type="text" 
                        placeholder="Ej: electronica" 
                        name="titulo" 
                        value={datosForm.categoria}
                        onChange={manejarCambio} 
                        className={estilo.formControl}
                    /> 
                </div> 
                <div className={estilo.formGroup}>  
                    <label>Precio:</label> 
                    <input 
                        type="number" 
                        placeholder="Ej: 95.00"
                        name="precio"
                        onChange={manejarCambio}
                        value={datosForm.precio}
                        className={estilo.formControl}
                    /> 
                </div>
                 <div className={estilo.formGroup}> 
                    <label>Descripcion del Producto:</label>
                    <input 
                        type="text" 
                        placeholder="Ej: Teclado Mecánico" 
                        name="descripcion" 
                        value={datosForm.descripcion}
                        onChange={manejarCambio} 
                        className={estilo.formControl}
                    /> 
                </div> 
                <div className={estilo.formGroup}>  
                    <label>Stock:</label> 
                    <input 
                        type="number" 
                        placeholder="Ej: 5"
                        name="stock"
                        value={data.stock}
                        onChange={manejarCambio}
                         className={estilo.formControl}
                    /> 
                </div> 
                <div className={estilo.formGroup}>  
                    <label>Imagen:</label> 
                    <input 
                        type="text" 
                        placeholder="https://…" 
                        onChange={manejarCambio}
                        name="imagen"
                        value={datosForm.imagen}
                        className={estilo.formControl}
                    /> 
                </div> 
                <button className={estilo.btnSubmit} type="submit" >{cargando
          ? "Procesando..."
          : esEdicion
          ? "Guardar Cambios"
          : "Crear Producto"}</button> 
            </form> 
        </div>
    )
}

export default FormularioProducto;