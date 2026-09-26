import  ItemList  from '../ItemList/ItemList';
import useProductos from '../../Repositorio/Producto/useProductos'
import useFetch from '../../Repositorio/useFetch'

function ItemListContainer({ Mensaje }) { 
    const { productos, error, cargando } = useProductos();
    //  const { data: productos, error, cargando } = useFetch('/Data/Productos.json');
    console.log({Mensaje})
    console.log(productos)
    if (cargando) return <p>Cargando productos...</p>;
    if (error) {
        console.log("error---:"+error);
            return <p>Error: {error}</p>;}
    return ( 
        <div> 
            <h2>{Mensaje}</h2> 
            <div>
                <ItemList productos={productos} />
            </div> 
        </div> 
    );
}

export default ItemListContainer;