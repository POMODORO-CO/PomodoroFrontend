import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import imagenes from '../../../assets/img/imagenes';
import { useQuery } from '@apollo/client';
import { GET_USUARIO } from '../../../graphql/users/queries.js';
import { useUser } from '../../../context/userContext';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute'
function MiPerfil() {

    const { userData } = useUser();
    const _id = String(userData._id);

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading } = useQuery(GET_USUARIO, { variables: { _id } },)


    useEffect(() => {
        console.log("datos del servidor: ", queryData);
    }, [queryData]);

    //encaso de que halla un error ejecute esto
    useEffect(() => {
        if (queryError) {
            <div className='min-h-screen flex justify-center items-center bg-gray-500'>
                <div className='bg-red-600 rounded-full flex min-w-max p-2'>
                    <img src={imagenes.imag1} alt="Logo empresa" className='md:p-1 h-20 w-20 animate-pulse' />
                    <p className='md:p-7 animate-pulse text-2xl font-bold'>Error consultado usuario...</p>
                </div>
            </div>
        }
    }, [queryError])

    if (queryLoading) return <div className='min-h-screen flex justify-center items-center bg-gray-500'>
        <div className='bg-yellow-400 rounded-full flex min-w-max p-2'>
            <img src={imagenes.imag1} alt="Logo empresa" className='md:p-1 h-20 w-20 animate-pulse' />
            <p className='md:p-7 animate-pulse text-2xl font-bold'>Cargando Login...just wait</p>
        </div>
    </div>;

    return (
        <div>
            <PrivateRoute rolelist={["ESTUDIANTE", "ADMINISTRADOR", "LIDER"]}>
                <Navbar />
                <div className='bg-gray-400 text-white min-h-screen'>
                    <div className='container mx-auto px-10'>
                        <section className='flex flex-row justify-between py-1'>
                            <section className='flex flex-col my-auto p-8'>
                                <form className="rounded px-8 pt-6 pb-8 mb-4">
                                <p className='bg-blue-900 text-white font-semibold text-center px-12 p-2 rounded-full m-2'> Mi perfil </p>
                                <div className="mb-4 py-5">
                                    <label className="block text-white text-sm font-bold py-1" htmlFor="username">
                                        Nombre
                                    </label>
                                    <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" defaultValue={queryData.Usuario.nombre_usuario} disabled="disabled" />

                                    <label className="block text-white text-sm font-bold py-1" htmlFor="Apellido">
                                        Apellido
                                    </label>
                                    <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Apellido" type="text" defaultValue={queryData.Usuario.apellido_usuario} disabled="disabled" />
                                    <label className="block text-white text-sm font-bold py-1" htmlFor="Documento">
                                        Documento
                                    </label>
                                    <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Documento" type="number" defaultValue={queryData.Usuario.documento_usuario} disabled="disabled" />
                                    <label className="block text-white text-sm font-bold py-1" htmlFor="Correo">
                                        Correo electrónico
                                    </label>
                                    <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="correo" type="text" defaultValue={queryData.Usuario.email_usuario} disabled="disabled" />
                                    <label className="block text-white text-sm font-bold py-1" htmlFor="Estado">
                                        Estado
                                    </label>
                                    <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Estado" type="text" defaultValue={queryData.Usuario.estado_usuario} disabled="disabled" />
                                    <label className="block text-white text-sm font-bold py-1" htmlFor="Rol">
                                        Rol
                                    </label>
                                    <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="rol" type="text" defaultValue={queryData.Usuario.rol_usuario} disabled="disabled" />
                                    <section className='inline-flex items-center px-8 py-6'>
                                        <button><a href='/private/EditPerfil' className="mx-3 py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Editar información</a></button>
                                    </section>
                                </div>
                                </form>
                            </section>
                            <section className='inline-flex items-center'>
                                <img className='object-fill h-80 w-auto' src={imagenes.imag8} alt="lock" />
                            </section>
                            <section className='flex flex-row justify-between'>
                                <section className='flex flex-row'>
                                    <section className='bg-white h-20 w-20 p-6 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </div>
                </div>
            </PrivateRoute>
        </div>

    )
}

export default MiPerfil;