import { useAuth } from "../../Contexto/AutContext";
import  {Navigate}  from "react-router-dom"

const RutaProtegida=({children,rolesPermitidos})=>{
    const {user, loading}=useAuth();
    console.log("estoy en ruta protegida")
    console.log(user);
    if(loading) return <div>Cargando ...</div>;

    if(!user || (rolesPermitidos && !rolesPermitidos.includes(user.rol)))
        return < Navigate to="/login" replace />;
    return children
};

export default RutaProtegida;