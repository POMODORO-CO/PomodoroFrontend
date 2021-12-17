import React from "react";
import { useUser } from "../../context/userContext";
import { Link } from "react-router-dom";


const PrivateRoute = ({ rolelist, children }) => {
    const { userData } = useUser();
    console.log(userData.rol_usuario)
    if (rolelist.includes(userData.rol_usuario)) {
        if (userData.estado_usuario === "AUTORIZADO") {
                return children;
        } else {
            return (
                (<div className='min-h-screen flex justify-center items-center bg-gray-500'>
                    <section className='bg-white inline-flex justify-center items-center rounded-full'>
<<<<<<< HEAD
                        <section className='bg-white text-black font-semibold px-2 rounded-full m-1'>
                            Usted no tiene un estado ACTIVO
=======
                        <section className='bg-white text-black font-semibold px-2 rounded-full m-1 '>
                            Usted no tiene un estado AUTORIZADO
>>>>>>> main
                        </section>
                        <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'>{`Estado actual: ${userData.estado_usuario}`}</p>
                    </section>
                    <Link className="py-2 px-4" to={'/'}>
                        <button className="py-3 px-4 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Regresar</button></Link>
                </div>))
        }
    }
    return (
        <>
            <div data-testid="not-authorized">
                <section className='bg-white inline-flex justify-center items-center rounded-full'>
                    <section className='bg-white text-black font-semibold px-2 rounded-full m-1'>
                        <p>Estado:</p>    
                    </section>
                    <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'>No esta autorizado</p>
                </section>
            </div>
        </>
    )
};
export default PrivateRoute;