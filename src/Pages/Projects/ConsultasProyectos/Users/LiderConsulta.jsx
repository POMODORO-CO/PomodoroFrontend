import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';

import { GET_PROYECTOS_LIDER } from '../../../../graphql/projects/queriesProjects';
import { useUser } from '../../../../context/userContext';
import PrivateRoute from '../../../../components/PrivateRoute/PrivateRoute';
import "../../../../index.css";

function LiderConsulta() {

    const { userData } = useUser();
    const liderProyecto = userData._id;
    const {
        data: dataP_Lider,
        error: errorP_Lider,
        loading: loadingP_Lider } = useQuery(GET_PROYECTOS_LIDER, { variables: { liderProyecto } },);

    if (loadingP_Lider) {
        toast.info('Cargando Datos', { toastId: 'LOADING', });
    }
    if (errorP_Lider) {
        toast.error('Cargando Datos', { toastId: 'ERROR', });
    }
    return (
        <>
            <PrivateRoute rolelist={["LIDER"]}>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                />
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
                                <table className="min-w-auto divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th scope="col" className="hidden">
                                                ID
                                            </th>
                                            <th scope="col" className="px-2 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                Nombre del proyecto
                                            </th>
                                            <th scope="col" className="px-12 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                Líder
                                            </th>
                                            <th scope="col" className="px-12 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"                                        >
                                                Estado
                                            </th>
                                            <th scope="col" className="px-12 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"                                        >
                                                Fase
                                            </th>
                                            <th scope="col" className="Px-12 py-2 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {dataP_Lider && dataP_Lider.ProyectosLider.map((u) => {
                                            return (
                                                <tr key={u._id}>
                                                    <td className="hidden">
                                                        <span
                                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-blue-900">
                                                            {u._id}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-blue-900">
                                                            {u.nombre_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span
                                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-white text-blue-900">
                                                            {u.lider_proyecto.nombre_usuario + " " + u.lider_proyecto.apellido_usuario}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span
                                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-white text-blue-900">
                                                            {u.estado_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span
                                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-blue-900">
                                                            {u.fase_proyecto}
                                                        </span>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium "                                 >

                                                        {/* {u.estado_proyecto == "ACTIVO" ?
                                                            <>

                                                                <a href="#" className="inline-block"><AiIcons.AiFillPlusCircle size={25} /></a>
                                                                
                                                                {u.estado_proyecto == "ACTIVO" ? 
                                                                <Link to={`/private/Proyecto/InformacionLider/${u._id}`}>
                                                                    <FaIcons.FaEdit size={25} />
                                                                </Link> : null}

                                                                <a href="#" className="inline-block">
                                                                    <FaIcons.FaTrash size={25} />
                                                                </a>
                                                            </>
                                                            : null} */}
                                                        <Link to={`/private/Proyecto/InformacionLider/${u._id}`} data-tip="React-tooltip">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-900 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                            
                                                            <ReactTooltip className='fill-blue-900' place="top" type="info" effect="solid">
                                                                <span >Ver Proyecto</span>
                                                            </ReactTooltip>
                                                        </Link>

                                                    </td>

                                                </tr>
                                            )
                                        })}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </PrivateRoute>

        </>


    )
}

export default LiderConsulta;