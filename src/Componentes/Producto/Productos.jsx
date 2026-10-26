import useGetBD from '../../Repositorio/RepoProducto';
import Card from "../Card/Card";
import cadorna from '../ItemList/ItemList.module.css'


function Productos({Mensaje}) { 
    const { data: productos, cargando, error } = useGetBD('productos');

    // Manejamos el estado de carga que nos provee el hook
    if (cargando) {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <p>Cargando datos desde la base de datos...</p>
            </div>
        );
    }
    // Manejamos posibles errores de red o permisos
    if (error) {
        return <p style={{ color: 'red' }}>Hubo un error al cargar: {error}</p>;
    }
    return (
        <div>
            <h2>Lista de Productos</h2>
            {productos.length === 0 ? (<p>No hay productos registrados en la colección.</p>) 
            : ( productos.map (prod => (< Card key={prod.id} {...prod} />)))
            }
        </div>
    );

    
}; 
export default Productos;