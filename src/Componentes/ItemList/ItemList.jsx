
import Card from "../Card/Card";
import cadorna from './ItemList.module.css'

function ItemList({ productos }) {
    console.log("Prod: "+{productos})
    if (productos.lenght==0) return <p>No hay productos</p>
    return ( 
        
        <div className={cadorna.itemList}>
            
            {productos.map(prod => ( <Card key={prod.id} {...prod} /> ))} 
           
        </div> 
    ); 
}
export default ItemList;