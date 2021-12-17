import React from "react";
import { useUser } from "../../context/userContext";
import { Link } from "react-router-dom";
import Login from '../Login/Login';

const PrivateRoute = ({ rolelist, children }) => {
const { userData } = useUser();

    if (rolelist.includes(userData.rol_usuario)) {
        if (userData.estado_usuario !== "PENDIENTE") {
            return children;
        } else {
            return (
                (<div className='min-h-screen flex justify-center items-center bg-gray-500'>
                    <div className='bg-yellow-400 rounded-full flex min-w-max p-2 justify-center items-center'>
                        <h1 className='py-2 px-1 text-2xl'>Usted no tiene un estado ACTIVO</h1>
                        <h4 className='py-2 px-1 animate-pulse text-2xl font-bold'>{` - Estado actual: ${userData.estado_usuario}`}</h4>
                        <div className="py-2 px-4">
                        <Link to={'../../Pages/Login'}>
                                <button className="py-2 px-4 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Ir atrás</button></Link>
                        </div>
                    </div>
                </div>))
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