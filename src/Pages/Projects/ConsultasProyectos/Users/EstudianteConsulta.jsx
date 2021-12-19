import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as FaIcons from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import "../../../../index.css";
import { INCRIPCIONES_USUARIO } from '../../../../graphql/incriptions/queriesIncriptions';
import { useUser } from '../../../../context/userContext'
import PrivateRoute from '../../../../components/PrivateRoute/PrivateRoute';
import {ELIMINAR_INSCRIPCION} from '../../../../graphql/incriptions/mutationInscription'

function EstudianteConsulta() {

    const { userData } = useUser();
    const estudiante = userData._id;

    const { 
            data: dataInscripcion, 
            error: errorInscripcion, 
            loading: loadingInscripcion } = useQuery(INCRIPCIONES_USUARIO,{variables:{estudiante}});
    const [eliminarInscripcion,{
            data,
            error,
            loading }]=useMutation(ELIMINAR_INSCRIPCION)
    
    const submit=(_id)=>{
        if (_id != null) {
            confirmAlert({
                title: 'Borrar Inscripción',
                message: '¿Confirmas borrar la inscripción a este proyecto?',
                buttons: [
                    {
                        label: 'Sí',
                        onClick: () => {
                            {
                                console.log('ent');
                                console.log('as');
                            }
                            eliminarInscripcion(
                                {
                                    variables: { _id }
                                }
                            )
                            alert('Inscripción exitosa')
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => alert('No se realizó la inscripción')
                    }
                ]
            });
        }
    };

    if (loadingInscripcion) {
        toast.info('Cargando Datos', {toastId: 'LOADING',});
    }
    if (errorInscripcion) {
        toast.error('Cargando Datos', {toastId: 'ERROR',});
    }
    

    return (
        <>
            <PrivateRoute rolelist={["ESTUDIANTE"]}>
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
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="hidden">
                                                ID
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nombre Proyecto 
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Lider
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Fase proyecto
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Estado  proyecto
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Estado inscripción
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {dataInscripcion && dataInscripcion.InscripcionesOneUser.map((u) => {
                                            return (
                                                <tr key={u._id}>
                                                    <td className="hidden">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {u._id}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {u.inscripcion_proyecto.nombre_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-800">
                                                            {u.inscripcion_proyecto.lider_proyecto.nombre_usuario + " " + u.inscripcion_proyecto.lider_proyecto.apellido_usuario}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-800">
                                                            {u.inscripcion_proyecto.fase_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-800">
                                                            {u.inscripcion_proyecto.estado_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-800">
                                                            {u.estado_inscripcion}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                        <button onClick={() => submit(u._id)}>
                                                        <FaIcons.FaRegTrashAlt size={25} />
                                                        </button>
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

export default EstudianteConsulta;
