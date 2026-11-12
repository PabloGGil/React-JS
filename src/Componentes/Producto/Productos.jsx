import {useGetBD} from '../../Repositorio/RepoBase';
// import Card from "../Card/Card";
// import cadorna from '../Estilos/ItemList.module.css'
import { DtoProducto } from '../Card/Dtoproducto';
import { Spinner} from 'react-bootstrap';
// import  DtoDetalleProducto  from '../Card/DtoDetalleProducto';
import spinner from '../Estilos/Spinner.module.css'
import estilo from '../Estilos/Productos.module.css'
import { Container, Row, Col,  Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// import loader from '../Loader.jsx'
function Productos({Mensaje}) { 
    const { data: productosBD, cargando, error } = useGetBD('productos');
    const [busqueda, setBusqueda]=useState("")
    const productosLista = productosBD || [];

    const productosFiltrados = productosLista.filter(prod => {
        // Nos aseguramos de que prod.titulo exista para evitar errores si viene vacío
        const titulo = prod.titulo || '';
        return titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    if (cargando) {
        return (
            <>
            {/* <loader /> */}
            <div className={spinner.container}>
                <div className={spinner.spinner} >
                    <div className={spinner.spinnerin}></div>
                    {/* <p>Cargando datos desde la base de datos...</p> */}
                </div>
            </div>
            
            </>
        );
    }
    // Manejamos posibles errores de red o permisos
    if (error) {
        return <p style={{ color: 'red' }}>Hubo un error al cargar: {error}</p>;
    }
    return (
        <>
        <Container className={estilo.container}>
            <div>
                <Row  className={estilo.inputContainer}>  
                    <Col>
                    <input 
                        type="text" 
                         //"form-control" 
                        placeholder="Buscar en los productos cargados..." 
                        onChange={(e) => setBusqueda(e.target.value)} 
                    /> 
                    </Col> 
                </Row> 
                <Row>
                    <h2>Lista de Productos</h2>
                    {productosFiltrados.length === 0 ? (<p>No hay productos registrados en la colección.</p>) 
                    : ( productosFiltrados.map (prod => (
                            <DtoProducto key={prod.idx} producto={prod} />
                        )))
                    }
                </Row>
            </div>
        </Container>
        </>
    );

    
}; 
export default Productos;