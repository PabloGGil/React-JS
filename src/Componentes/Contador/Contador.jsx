import estiloCarta from '../Card/Card.module.css';
import { useState} from "react";

function Contador(){
    const [contador, setContador]=useState(0);
    const agregar=()=>{setContador(contador +1)}
    const quitar=()=>{
        if(contador>0){
            setContador(contador -1)
        }
    }
    return ( 
        <div style={{ margin: '5px', padding: '5px', border: '1px solid black' }}> 
            <div style={{ border: '2px solid #ccc', padding: '15x 30px', borderRadius: '8px', textAlign: 'center' ,display:'flex', alignItems: 'center',gap:'15px',justifyContent:'center'}}>
                    <button className={estiloCarta.boton} onClick={agregar}> + </button> 
                    <span>{contador}</span>
                    <button className={estiloCarta.boton} onClick={quitar}> - </button> 
                </div>
            {/* <button onClick={agregar}>Sumar +1</button> 
            <button onClick={quitar}>Restar -1</button>  */}
        </div>
    );
}

export default Contador;