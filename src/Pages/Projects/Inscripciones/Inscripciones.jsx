import React, { useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import "../../../index.css";
import Navbar from '../../../components/Navbar/Navbar'
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import {GET_PROYECTOS} from '../../../graphql/projects/queriesProjects'
import {CREAR_INSCRIPCION} from '../../../graphql/incriptions/mutationInscription'
import { useUser } from '../../../context/userContext';


function Inscripciones() {

    const { userData } = useUser();

    const { 
        data: dataProjects, 
        error: errorProjects, 
        loading: loadingProjects } = useQuery(GET_PROYECTOS);

    if (loadingProjects) {
        toast.info('Cargando Datos', {toastId: 'LOADING',});
    }
    if (errorProjects) {
        toast.error('Cargando Datos', {toastId: 'ERROR',});
    }

    const [incribirProyecto,{ 
        data:dataInscribir,
        error:errordataInscribir,
        loading:loadingdataInscribir}]=useMutation(CREAR_INSCRIPCION);
    
    if (loadingdataInscribir) {
        toast.info('Cargando Datos', {toastId: 'LOADING',});
    }
    if (errordataInscribir) {
        toast.error('Cargando Datos', {toastId: 'ERROR',});
    }
    useEffect(()=>{
        if (dataInscribir) {
            
            toast.success('Inscripcion exitosa', {toastId: 'SUCCESS',});
        }
    },[dataInscribir])

    const submit = (inscripcionProyecto,estudiante) => {
        
        
        
        if (inscripcionProyecto) {
            confirmAlert({
                title: 'Inscripción de proyecto',
                message: '¿Confirmas inscribir el proyecto?',
                buttons: [
                    {
                        label: 'Sí',
                        onClick: () => {
                            {
                                console.log('ent');
                                console.log('as');
                            }
                            incribirProyecto(
                                {
                                    variables: {inscripcionProyecto, estudiante}
                                }
                            )
                            //alert('Inscripción negada')
                            //window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => alert('No se nego la inscripción')
                    }
                ]
            });
        }
    };
    return (
        <>
            <PrivateRoute rolelist={["ESTUDIANTE"]}>
            <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false}/>
                <div>
                    <Navbar />
                    <div className='consulta'>
                        <h1>INSCRIPCIONES</h1>
                    </div>
                    <div className="flex items-center flex-col text-middle">

                        <div className="box pt-8 items-center">
                            <div className="flex wrap items-center text-middle">
                                <h1 className="p-3">Proyecto</h1>
                                <div className="select w-5/6">
                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Proyectos que lidera">
                                        <option value="all" defaultValue>PROYECTOS QUE LIDERA</option>
                                        <option value="photo">P1</option>
                                        <option value="illustration">`P2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex wrap items-center text-middle p-4">
                                <div className="select w-5/6">
                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Proyectos que lidera">
                                        <option value="all" defaultValue>LISTADO DE ESTUDIANTES</option>
                                        <option value="photo">P1</option>
                                        <option value="illustration">`P2</option>
                                    </select>
                                </div>
                                <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                                    <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                    <input type="search" name="" id="" placeholder="Buscar.." x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                                </div>
                            </div>
                        </div>
                        <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
                            <div className="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
                                <div
                                    className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-auto divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Nombre del proyecto
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Líder
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Estado del proyecto
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Fase del proyecto
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Acciones
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {dataProjects && dataProjects.Proyectos.map((u) => {
                                            return (
                                                <tr key={u._id}>
                                                    <td className="hidden">
                                                        <span className=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {u._id}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {u.nombre_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-800">
                                                            {u.lider_proyecto.nombre_usuario + " " + u.lider_proyecto.apellido_usuario}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-800">
                                                            {u.estado_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-800">
                                                            {u.fase_proyecto}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                        <button onClick={() => submit(u._id, userData._id)} data-tip="React-tooltip">
                                                            <FaIcons.FaPlus size={25} />
                                                            <ReactTooltip place="top" type="success" effect="solid">
                                                                <span>Inscribir proyecto</span>
                                                            </ReactTooltip>
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
                </div>
            </PrivateRoute>

        </>
    )
}

export default Inscripciones;