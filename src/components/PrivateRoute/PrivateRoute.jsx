import React from "react";
import { useUser } from "../../context/userContext";
import { Link } from "react-router-dom";
const PrivateRoute = ({ rolelist, children }) => {
    const { userData } = useUser();
    console.log(userData.rol_usuario)
    if (rolelist.includes(userData.rol_usuario)) {
        if (userData.estado_usuario === "ACTIVO") {
                return children;
        } else {
            return (
                <div>
                    <h1>Usuario usted no tiene un estado ACTIVO</h1>
                    <h4>{`su estado es ${userData.estado_usuario}`}</h4>
                    <div className="py-2 px-6">
                        <Link to={`/`}>
                            <button className="py-2 px-6 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Ir atrás</button></Link>
                    </div>

                </div>
            )
        }

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