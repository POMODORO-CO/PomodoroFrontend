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
                <div className='bg-gray-100 text-black'>
                    <section className='container mx-auto px-6'>
                        <nav className='py-4 flex justify-between'>
                            <section className='flex flex-row justify-center'>
                                <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                                <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
                            </section>
                        </nav>

                        <section className='flex flex-row justify-between '>
                            <section className='flex flex-col px-20 py-1'>

                                <h1 className='text-5xl font-bold pt-1'>
                                    TU PERFIL
                                </h1>

                                <div className=' grid place-content-center bg-gray-100'>
                                    <div className="w-full max-w-2xl m-6">
                                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">


                                            <div className="mb-4">
                                                <label className="block text-blue-900 text-sm font-bold py-1" htmlFor="username">
                                                    Nombre
                                                </label>
                                                <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" defaultValue={queryData.Usuario.nombre_usuario} disabled="disabled" />

                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Apellido">
                                                    Apellido
                                                </label>
                                                <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Apellido" type="text" defaultValue={queryData.Usuario.apellido_usuario} disabled="disabled" />
                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Documento">
                                                    Documento
                                                </label>
                                                <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Documento" type="number" defaultValue={queryData.Usuario.documento_usuario} disabled="disabled" />
                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Correo">
                                                    Correo electrónico
                                                </label>
                                                <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="correo" type="text" defaultValue={queryData.Usuario.email_usuario} disabled="disabled" />
                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Estado">
                                                    Estado
                                                </label>
                                                <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Estado" type="text" defaultValue={queryData.Usuario.estado_usuario} disabled="disabled" />
                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Rol">
                                                    Rol
                                                </label>
                                                <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="rol" type="text" defaultValue={queryData.Usuario.rol_usuario} disabled="disabled" />
                                                <button> <a href='/private/EditPerfil' className="py-5 px-6 text-white font-bold rounded-full bg-blue-400 shadow-lg block md:inline-block">Editar información </a></button>

                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </section>

                            <section className=' item-row'>
                                <img src={imagenes.imag8} alt="lock" />
                            </section>
                        </section>

                    </section>

                </div>
            </PrivateRoute>
        </div>

    )
}

export default MiPerfil;