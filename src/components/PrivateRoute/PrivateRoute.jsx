import React from "react";
import { useUser } from "../../context/userContext";
import { Link } from "react-router-dom";


const PrivateRoute = ({ rolelist, children }) => {
    const { userData } = useUser();

    if (rolelist.includes(userData.rol_usuario)) {
        if (userData.estado_usuario !== "PENDIENTE") {
            return children;
        } else {
            return (
                (<div className='min-h-screen flex justify-center items-center bg-gray-500'>
                    <section className='bg-white inline-flex justify-center items-center rounded-full'>
                        <section className='bg-white text-black font-semibold px-2 rounded-full m-1 '>
                            Usted no tiene un estado ACTIVO
                        </section>
                        <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'>{`Estado actual: ${userData.estado_usuario}`}</p>
                    </section>
                    <Link to={'../../Pages/Landingpage/Landingpage.jsx'}>
                        <button className="py-2 px-4 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Ir atrás</button></Link>
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