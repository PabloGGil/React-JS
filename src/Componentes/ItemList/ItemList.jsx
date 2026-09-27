
import Card from "../Card/Card";
import cadorna from './ItemList.module.css'

function ItemList({ recurso,vista }) {
    console.log("estoy en el itemList")
    if ( Array.isArray(recurso) ){
        if(recurso.length ==0 ) 
            return <p>No hay productos</p>
    }
    if(vista=="Card"){
        return(<div className={cadorna.itemList}>     
            {recurso.map(obj => ( <Card key={obj.id} {...obj} /> ))} 
        </div> 
        )     
    }
    console.log(recurso)
    return ( 
       
        <ul >
            {recurso.map((p) => (
        <li  key={p.id}>{p.nombre} --- {p.puesto}</li>
      ))}
    </ul>
       
    ); 
}
export default ItemList;