import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as FaIcons from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Navbar from '../../../components/Navbar/Navbar'
import imagenes from '../../../assets/img/imagenes';
import { GET_PROYECTO } from '../../../graphql/projects/queriesProjects';
import useFormData from '../../../components/UseForm/useForm';
import { EDITAR_PROYECTO_LIDER } from '../../../graphql/projects/mutationsprojects';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import { INSCRIPCIONES_PENDIENTES, INSCRIPCIONES_ACEPTADAS } from '../../../graphql/incriptions/queriesIncriptions'
import {APROBAR_INSCRIPCION, NEGAR_INSCRIPCION} from '../../../graphql/incriptions/mutationInscription'


function InfoProyectoLider() {

    // is the last part of the link i use before /pruebaBack/editar/${u._id} take the _id variable 
    const { _id } = useParams();
    const inscripcionProyecto = _id;
    const [tooglePendientes, setTooglePendientes] = useState(true);

    const {
        data: dataP,
        error: errorP,
        loading: loadingP } = useQuery(GET_PROYECTO, { variables: { _id } },);
    const {
        data: dataPendientes,
        error: errorPendientes,
        loading: loadingPendientes } = useQuery(INSCRIPCIONES_PENDIENTES, {
            variables: { inscripcionProyecto }
        });
    const {
        data: dataAceptadas,
        error: errorAceptadas,
        loading: loadingAceptadas } = useQuery(INSCRIPCIONES_ACEPTADAS, {
            variables: { inscripcionProyecto }
        })

    const [editarProyectoLider,
        { data: mutationData,
            loading: MutationLoading,
            error: mutationError }] = useMutation(EDITAR_PROYECTO_LIDER);

    const [aprobarInscripcion,{
                data:dataAprobar,
                error:errorAprobar,
                loading:loadingAprobar }]=useMutation(APROBAR_INSCRIPCION)
    
    const [negarInscripcion,{
        data:dataNegar,
        error:errorNegar,
        loading:loadingNegar }]=useMutation(NEGAR_INSCRIPCION)
    
    //Hook that is build in the file useForm that i need 3 variables
    const { form, formData, updateFormData } = useFormData(null);

    useEffect(() => {
        if (mutationData) {
            toast.success('Datos actualizados', { toastId: 'error', });
        }
    }, [mutationData])


    const submitForm = (e) => {
        e.preventDefault();
        let objetivosGen = [{
            _id: formData.idObjetivosPrim,
            tipo: "GENERAL",
            descripcion: formData.objetivosPrim
        }, {
            _id: formData.idObjetivosSec,
            tipo: "ESPECIFICO",
            descripcion: formData.objetivosSec
        }
        ]
        formData._id = _id;
        formData.objetivosProyecto = objetivosGen;
        formData.presupuestoProyecto = parseFloat(formData.presupuestoProyecto);
        editarProyectoLider({

            variables: { ...formData }
        })
        alert("Cambios guardados con éxito")
    };
    const cambioToogle = () => {
        setTooglePendientes(!tooglePendientes);
        console.log(tooglePendientes)//falso son aceptados
    };

    if (errorP) {
        toast.error('Error en edicion de datos', { toastId: 'error-adasda', });
    }
    if (loadingP) {
        toast.info('Cargando Datos', { toastId: 'cargandosad', });
    }
    if (MutationLoading) {
        toast.info('Editando', { toastId: 'cargando', });
    }
    if (mutationError) {
        toast.error('Error cambiando proyecto', { toastId: 'errorEdicion', });
    }
    if (errorAceptadas) {
        toast.error('Error inscripciones', { toastId: 'error-con-inscripciones', });
    }
    if (loadingAceptadas) {
        toast.info('Cargando inscripciones', { toastId: 'carga-con-inscripciones', });
    }
    if (errorPendientes) {
        toast.error('Error inscripciones', { toastId: 'error-conPen-inscripciones', });
    }
    if (loadingPendientes) {
        toast.info('Cargando inscripciones', { toastId: 'carga-conPen-inscripciones', });
    }
    const submit1=(_id)=>{
        if (_id != null) {
            confirmAlert({
                title: 'Negar la Inscripción',
                message: '¿Confirmas borrar la inscripción del usuario al proyecto?',
                buttons: [
                    {
                        label: 'Sí',
                        onClick: () => {
                            {
                                console.log('ent');
                                console.log('as');
                            }
                            negarInscripcion(
                                {
                                    variables: { _id }
                                }
                            )
                            alert('Inscripción negada')
                            window.location.reload();
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
    const submit2=(_id)=>{
        if (_id != null) {
            confirmAlert({
                title: 'Aprobar Inscripción',
                message: '¿Confirma aceptar la inscripción a este proyecto?',
                buttons: [
                    {
                        label: 'Sí',
                        onClick: () => {
                            {
                                console.log('ent');
                                console.log('as');
                            }
                            aprobarInscripcion(
                                {
                                    variables: { _id }
                                }
                            )
                            alert('Inscripción aprobada')
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => alert('No se realizó la aprobación inscripción')
                    }
                ]
            });
        }
    };
    return (
        <PrivateRoute rolelist={["LIDER"]}>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
            />
            <div>
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
                            {dataP &&
                                <section className='flex flex-col px-20 py-1'>
                                    <form className="w-full max-w-lg " onSubmit={submitForm} onChange={updateFormData} ref={form}>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full  px-3">
                                                <label className="text-Black text-sm font-bold mb-2" >
                                                    Nombre del Proyecto
                                                </label>
                                                <input name='nombreProyecto' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-NProyecto" type="text" placeholder={dataP.Proyecto.nombre_proyecto} defaultValue={dataP.Proyecto.nombre_proyecto} />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">

                                            <div className="w-full  px-3 py-3 ">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                    Líder del proyecto
                                                </label>
                                                <input disabled name='liderProy' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP.Proyecto.lider_proyecto.nombre_usuario + " " + dataP.Proyecto.lider_proyecto.apellido_usuario} />
                                            </div>

                                            <div className="w-full  px-3 py-3 ">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                    Objetivo General del Proyecto
                                                </label>
                                                <input name='objetivosPrim' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP.Proyecto.objetivos_proyecto[0].descripcion} defaultValue={dataP.Proyecto.objetivos_proyecto[0].descripcion} />
                                            </div>
                                            <div className="hidden ">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                    ID Objetivo General
                                                </label>
                                                <input name='idObjetivosPrim' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP.Proyecto.objetivos_proyecto[0]._id} defaultValue={dataP.Proyecto.objetivos_proyecto[0]._id} />
                                            </div>
                                            <div className="w-full px-3 py-3 ">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                    Objetivo Especifico del Proyecto
                                                </label>
                                                <input name='objetivosSec' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP.Proyecto.objetivos_proyecto[1].descripcion} defaultValue={dataP.Proyecto.objetivos_proyecto[1].descripcion} />
                                            </div>
                                            <div className="hidden ">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                    ID Objetivo Especifico
                                                </label>
                                                <input name='idObjetivosSec' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP.Proyecto.objetivos_proyecto[1]._id} defaultValue={dataP.Proyecto.objetivos_proyecto[1]._id} />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full  px-3 mb-6 md:mb-0">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                                                    Presupuesto del Proyecto
                                                </label>
                                                <input name='presupuestoProyecto' type='number' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="presupuesto-proyecto" placeholder={dataP.Proyecto.presupuesto_proyecto} defaultValue={dataP.Proyecto.presupuesto_proyecto} />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full  px-3 mb-6 md:mb-0">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                                                    Estado del proyecto
                                                </label>
                                                <select disabled defaultValue={dataP.Proyecto.estado_proyecto} name="estadoProyecto" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder={dataP.Proyecto.estado_proyecto}>
                                                    <option value="ACTIVO">ACTIVO</option>
                                                    <option value="INACTIVO">INACTIVO</option>
                                                </select>
                                            </div>
                                            <div className="w-full  px-3 mb-6 md:mb-0">
                                                <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                                                    Fase del proyecto
                                                </label>
                                                <select disabled defaultValue={dataP.Proyecto.fase_proyecto} name="faseProyecto" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder={dataP.Proyecto.estado_proyecto}>
                                                    <option value="INICIADO">INICIADO</option>
                                                    <option value="DESARROLLO">DESARROLLO</option>
                                                    <option value="TERMINADO">TERMINADO</option>
                                                    <option value="NULO">NULO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-2">
                                            <div className="w-full px-3 py-3 mb-6 md:mb-0">
                                                <button className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type='submit'>
                                                    GUARDAR CAMBIOS
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div >
                                        <NavLink to="/private/Proyecto/Consulta" className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">Atras</NavLink>
                                    </div>
                                </section>

                            }
                            {dataP &&
                                <>
                                    {dataP.Proyecto.estado_proyecto == "ACTIVO" &&
                                        <>
                                            <section className=' item-row'>

                                                <div className="flex items-center flex-col text-middle">
                                                    <div>
                                                        <NavLink to={`/private/Proyecto/Avances/${dataP.Proyecto._id}`} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">Avances Proyecto</NavLink>
                                                        <br />
                                                        {tooglePendientes == true ?
                                                            <>
                                                                <button onClick={() => cambioToogle()} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> click ver Aceptados</button>
                                                                <label className="text-2xl block text-blue-900 text-sm font-bold py-7" htmlFor="username">
                                                                    Listado de Inscritos Pendientes al Proyecto
                                                                </label>

                                                            </>
                                                            : <>
                                                                <button onClick={() => cambioToogle()} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">click ver Pendientes</button>
                                                                <label className="text-2xl block text-blue-900 text-sm font-bold py-7" htmlFor="username">
                                                                    Listado de Inscritos Aceptados al Proyecto
                                                                </label>
                                                            </>
                                                        }
                                                    </div>
                                                    <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
                                                        <div className="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
                                                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                                <table className="min-w-auto divide-y divide-gray-200">
                                                                    <thead className="bg-gray-50">
                                                                        <tr>
                                                                            <th scope="col" className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                Nombre
                                                                            </th>
                                                                            <th scope="col" className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                Apellido
                                                                            </th>
                                                                            <th scope="col" className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                                                                Correo
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                Solicitud
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                Acción
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                                        {tooglePendientes === true ?
                                                                            <>
                                                                                {dataPendientes && dataPendientes.InscripcionesOneProjectPendientes.map((u) => {
                                                                                    return (
                                                                                        <tr key={u._id}>

                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estudiante.nombre_usuario}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estudiante.apellido_usuario}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estudiante.email_usuario}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estado_inscripcion}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">
                                                                                                    <button onClick={() => submit1(u._id)}>
                                                                                                        rechazar
                                                                                                        <FaIcons.FaRegThumbsDown size={25} />
                                                                                                        
                                                                                                    </button>
                                                                                                    <button onClick={() => submit2(u._id)}>
                                                                                                        aceptar
                                                                                                        <FaIcons.FaRegThumbsUp size={25} />
                                                                                                        
                                                                                                    </button>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                })}
                                                                            </>
                                                                            : <>
                                                                                {dataAceptadas && dataAceptadas.InscripcionesOneProject.map((u) => {
                                                                                    return (
                                                                                        <tr key={u._id}>

                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estudiante.nombre_usuario}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estudiante.apellido_usuario}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estudiante.email_usuario}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">{u.estado_inscripcion}</div>
                                                                                            </td>
                                                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-center text-gray-900">
                                                                                                    {/* <button onClick={() => submit1(u._id)}>
                                                                                                        <FaIcons.FaRegThumbsDown size={25} />
                                                                                                        
                                                                                                    </button>
                                                                                                    <button onClick={() => submit2(u._id)}>
                                                                                                        <FaIcons.FaRegThumbsUp size={25} />
                                                                                                        
                                                                                                    </button> */}
                                                                                                    {/* <NavLink to={`/private/GestionUsuarios/editar/${u.estudiante._id}`} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">ver avances</NavLink> */}
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                })}
                                                                            </>

                                                                        }

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </section>
                                        </>
                                    }
                                </>
                            }



                        </section>




                    </section>
                </div>
            </div>
        </PrivateRoute>
    )
}

export default InfoProyectoLider;