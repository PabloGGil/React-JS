import  ItemList  from '../ItemList/ItemList';

import { useGetData } from '../../Repositorio/api';

function ItemListContainer({ Mensaje, vista , recurso}) { 
    const { data, error, cargando } = useGetData(recurso);
    console.log("estoy en itemListContainer")
    console.log(data)
    if (cargando) return <p>Cargando productos...</p>;
    if (error) {
        console.log("error---:"+error);
        return <p>Error: {error}</p>;
    }
    return ( 
        <div> 
            <h2>{Mensaje}</h2> 
            <div>
                <ItemList recurso={data} vista={vista}/>
            </div> 
        </div> 
    );
}

export default ItemListContainer;