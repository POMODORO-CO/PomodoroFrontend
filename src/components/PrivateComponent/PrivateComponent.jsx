import { useUser } from "../../context/userContext";
import React from "react";

const PrivateComponent=({rolelist,children})=>{
    const {userData}=useUser();

    if(rolelist.includes(userData.rol_usuario)){
        return children;
    }
    return (
        <>
        </>
    )
};
export default PrivateComponent;