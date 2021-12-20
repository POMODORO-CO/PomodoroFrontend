import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../../../index.css";
import Navbar from '../../../components/Navbar/Navbar'
import imagenes from '../../../assets/img/imagenes';
import { useUser } from '../../../context/userContext';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import { INSCRIPCIONES_ACEPTADAS_ONEUSER } from '../../../graphql/incriptions/queriesIncriptions'
import { NavLink } from 'react-router-dom';


function Avances() {

    const { userData } = useUser();

    const estudiante = String(userData._id);

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading } = useQuery(INSCRIPCIONES_ACEPTADAS_ONEUSER, { variables: { estudiante } })


    useEffect(() => {
        if (queryData) {
            toast.success('Datos actualizados', { toastId: 'error', });
        }
    }, [queryData]);

    //encaso de que halla un error ejecute esto
    useEffect(() => {
        if (queryError) {
            return (
                <div> Error consultando Usuario</div>
            )
        }
    }, [queryError])

    if (queryLoading) {
        return (
            <div className='min-h-screen flex justify-center items-center bg-gray-500'>
                <div className='bg-yellow-400 rounded-full flex min-w-max p-2'>
                    <img src={imagenes.imag1} alt="Logo empresa" className='md:p-1 h-20 w-20 animate-pulse' />
                    <p className='md:p-7 animate-pulse text-2xl font-bold'>Cargando Login...just wait</p>
                </div>
            </div>
        )
    };


    return (
        <PrivateRoute rolelist={["ESTUDIANTE"]}>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
            <div>
                <Navbar />
                <section className='flex flex-row justify-center'>
                    <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                    <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
                </section>
                <section className='text-center '>
                    <h1 className='text-3xl font-bold pt-1'>
                        MODULO DE REGISTRO DE AVANCES
                    </h1>
                </section>
                <div className="flex items-center flex-col text-middle">

                    <div className="box pt-6">
                        <div className="box-wrapper">

                            <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                                <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                <input type="search" name="" id="" placeholder="Buscar.." x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                                <div className="select">
                                    <select name="" id="" x-model="image_type" className="text-sm outline-none focus:outline-none bg-transparent">
                                        <option value="all" defaultValue>Todo</option>
                                        <option value="photo">ID</option>
                                        <option value="illustration">Nombre del proyecto</option>
                                        <option value="vector">Líder</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
                        <div className="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm} onChange={updateFormData} ref={form}> */}

                                <table className="min-w-auto divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nombre del proyecto
                                            </th>
                                            <th scope="col" className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Estado de Inscripción
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Fase del proyecto
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Ver avances
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">

                                        {queryData && queryData.InscripcionAprobadaProyecto.map((u, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{u.inscripcion_proyecto.nombre_proyecto}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{u.estado_inscripcion}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{u.inscripcion_proyecto.fase_proyecto}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">

                                                        <NavLink to={`/private/Proyecto/Avances/estudiante/${u.inscripcion_proyecto._id}`} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                                                            ver
                                                        </NavLink>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PrivateRoute>



    )
}

export default Avances;