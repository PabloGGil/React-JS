import { createContext, useState, useContext } from "react"; 
const SearchContext = createContext(); 
export function ProveedorBusquedas({ children }) { 
    const [busqueda, setBusqueda] = useState(""); 
    return ( 
        <ProveedorBusquedas.Provider value={{ busqueda, setBusqueda }}> 
            {children} 
        </ProveedorBusquedas.Provider> 
        ); 
} 

export function useSearch() { return useContext(ProveedorBusquedas); }