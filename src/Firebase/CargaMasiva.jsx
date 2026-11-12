import { collection, addDoc } from "firebase/firestore";
import { db } from "./config.js";
import { useState } from "react";
import {CreateBD} from "../Repositorio/RepoBase.jsx"

const CargaMasiva = () => {
  const [cant, setCant] = useState(0);
  const [cargando, setCargando] = useState(false);

  async function agregarProductos() {
    setCargando(true);
    setCant(0);

    try {
      // 1. Hacemos la petición para obtener el archivo JSON
      const response = await fetch('/Data/Nosotros.json');
      
      if (!response.ok) {
          throw new Error(`Error al cargar el archivo: ${response.status}`);
      }
      const listaObjetos = await response.json();
      
      let contador = 0;

      for (const objeto of listaObjetos) {
        const docRef = await addDoc(collection(db, "staff"), objeto);
        
        console.log("Documento escrito con ID: ", docRef.id);
        
        contador++;
        setCant(contador); // Actualiza el contador en tiempo real en la interfaz
      }

      alert("¡Carga masiva completada con éxito!");

    } catch (error) {
        console.log("Hubo un problema:", error);
        alert("Hubo un error en la carga. Revisa la consola.");
    } finally {
      setCargando(false);
    }
  }
  async function  prueba (){
   const  objeto={
    titulo: "zz",
    precio: 100,
    descripcion: "zz top",
    categoria: "zamudio",
    imagen:"",
    stock: "200",  
};
try{
    const docRef = await CreateBD( objeto);
    console.log( docRef)
   alert("¡Carga masiva completada con éxito! " );

    } catch (error) {
        console.log("Hubo un problema:", error);
        alert("Hubo un error en la carga. Revisa la consola.");
}
  }
  return (
    <>
    <div>
      <h1>Carga masiva de Productos</h1>
      <h3>Documentos subidos: {cant}</h3>
      <div>
        <button onClick={prueba}>prueba</button>
        <button onClick={agregarProductos} disabled={cargando}>
          {cargando ? "Cargando..." : "Comenzar carga"}
        </button>
      </div>
    </div>
    </>
  );
};

export default CargaMasiva;