import React from "react";
import { useUser } from "../../context/userContext";

const PrivateRoute=({rolelist,children})=>{
    const {userData} =useUser();

    if (rolelist.includes(userData.rol_usuario)){
        return children;
    }

    return (
        <>
        <div data-testid="not-authorized">
            no esta autorizado
        </div>
        </>
    )
};
export default PrivateRoute;