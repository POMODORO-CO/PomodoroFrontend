import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import imagenes from '../../assets/img/imagenes';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROYECTO } from '../../graphql/projects/queriesProjects';
import * as FaIcons from "react-icons/fa";
import useFormData from '../../components/UseForm/useForm';
import { EDITAR_PROYECTO_LIDER } from '../../graphql/projects/mutationsprojects';


function InfoProyectoLider() {

    function handleInputChange(e) {
        this.setState({
           [e.target.name]: e.target.value
        });
     }
    
    // is the last part of the link i use before /pruebaBack/editar/${u._id} take the _id variable 
    const { _id } = useParams();

    const [editarProyectoLider,
        { data: mutationData,
            loading: MutationLoading,
            error: mutationError }] = useMutation(EDITAR_PROYECTO_LIDER, { variables: { _id } },);


    //Hook that is build in the file useForm that i need 3 variables
    const { form, formData, updateFormData } = useFormData(null);

    useEffect(() => {
        console.log("Edicion proyecto ", mutationData)
    }, [mutationData])


    const submitForm = (e) => {
        e.preventDefault();
        formData.presupuestoProyecto = parseFloat(formData.presupuestoProyecto);
        editarProyectoLider({

            variables: { ...formData }
        })
        alert("Cambios guardados con éxito")
    };


    console.log('el id ', _id);
    const { data: dataP, error: errorP, loading: loadingP } = useQuery(GET_PROYECTO, { variables: { _id } },);
    console.log('objetivos ', dataP);
    return (

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
                        {dataP && Object.keys(dataP).map((u) => {
                            console.log("fecha", dataP[u].fecha_inicio_proyecto);

                            return (
                                <>
                                    <section className='flex flex-col px-20 py-1'>
                                        <form className="w-full max-w-lg " onSubmit={submitForm} onChange={updateFormData} ref={form}>
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full  px-3">
                                                    <label className="text-Black text-sm font-bold mb-2" >
                                                        Nombre del Proyecto
                                                    </label>
                                                    <input name='nombreProyecto' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-NProyecto" type="text" placeholder={dataP[u].nombre_proyecto} defaultValue={dataP[u].nombre_proyecto} />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-6">

                                                <div className="w-full  px-3 py-3 ">
                                                    <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                        Líder del proyecto
                                                    </label>
                                                    <input disabled name='liderProy' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP[u].lider_proyecto.nombre_usuario + " " + dataP[u].lider_proyecto.apellido_usuario} />
                                                </div>

                                                <div className="w-full  px-3 py-3 ">
                                                    <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                        Objetivo General del Proyecto
                                                    </label>
                                                    <input name='objetivosPrim' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP[u].objetivos_proyecto[0].descripcion} defaultValue={dataP[u].objetivos_proyecto[0].descripcion} />
                                                </div>
                                                <div className="w-full px-3 py-3 ">
                                                    <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                                                        Objetivo Especifico del Proyecto
                                                    </label>
                                                    <input name='objetivosSec' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder={dataP[u].objetivos_proyecto[1].descripcion} defaultValue={dataP[u].objetivos_proyecto[1].descripcion} />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full  px-3 mb-6 md:mb-0">
                                                    <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                                                        Presupuesto del Proyecto
                                                    </label>
                                                    <input name='presupuestoProyecto' type='number' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="presupuesto-proyecto" placeholder={dataP[u].presupuesto_proyecto} defaultValue={dataP[u].presupuesto_proyecto} />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full  px-3 mb-6 md:mb-0">
                                                    <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                                                        Estado del proyecto
                                                    </label>
                                                    <select disabled name="estadoProyecto" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder={dataP[u].estado_proyecto}>
                                                        <option value={dataP[u].estado_proyecto}>{dataP[u].estado_proyecto}</option>
                                                        <option value="ACTIVO">ACTIVO</option>
                                                        <option value="INACTIVO">INACTIVO</option>
                                                    </select>
                                                </div>
                                                <div className="w-full  px-3 mb-6 md:mb-0">
                                                    <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                                                        Fase del proyecto
                                                    </label>
                                                    <select disabled name="faseProyecto" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder={dataP[u].estado_proyecto}>
                                                        <option value={dataP[u].fase_proyecto}>{dataP[u].fase_proyecto}</option>
                                                        <option value="INICIADO">INICIADO</option>
                                                        <option value="DESARROLLO">DESARROLLO</option>
                                                        <option value="TERMINADO">TERMINADO</option>
                                                        <option value="NULO">NULO</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-2">


                                                {/* PENDIENTE DE AGREGAR FECHAS LEIDAS DESDE LA BD */}

                                                {/* <div className="w-full md:w-1/2 px-3">
                                                    <label className="text-black text-sm font-bold mb-2" htmlFor="Fecha de Inicio">
                                                        Fecha de inicio
                                                    </label>
                                                    <input type="date" name='fechaInicioProyecto' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="fecha-inicio" defaultValue={dataP[u].fecha_inicio_proyecto} />
                                                </div>
                                                <div className="w-full md:w-1/2 px-3">
                                                    <label className="text-Black text-sm font-bold mb-2" htmlFor="Fecha Final">
                                                        Fecha Final
                                                    </label>
                                                    <input type="date" name='fechaFinProyecto' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="fecha-fin" />
                                                </div> */}

                                                {/* PENDIENTE DE AGREGAR FECHAS LEIDAS DESDE LA BD */}

                                                <div className="w-full px-3 py-3 mb-6 md:mb-0">
                                                    <button className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type='submit'>
                                                        GUARDAR CAMBIOS
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </section>
                                </>
                            )
                        })}
                        <section className=' item-row'>

                            <div className="flex items-center flex-col text-middle">

                                <label className="text-2xl block text-blue-900 text-sm font-bold py-7" htmlFor="username">
                                    Listado de Avances del Proyecto
                                </label>
                                <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
                                    <div className="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
                                        <div
                                            className="
                                    shadow
                                    overflow-hidden
                                    border-b border-gray-200
                                    sm:rounded-lg
                                    "
                                        >
                                            <table className="min-w-auto divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>


                                                        <th
                                                            scope="col"
                                                            className="
                                                px-6
                                                py-3
                                                text-left text-xs
                                                font-medium
                                                text-gray-500
                                                uppercase
                                                tracking-wider
                                                "
                                                        >
                                                            Usuario Avance
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="
                                                px-6
                                                py-3
                                                text-left text-xs
                                                font-medium
                                                text-gray-500
                                                uppercase
                                                tracking-wider
                                                "
                                                        >
                                                            Descripción
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                                                        >
                                                            Observaciones
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                                                        >
                                                            Fecha Avance
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    <tr>

                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-center text-gray-900">Usuario</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-center text-gray-900">Actualización presupuesto</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-center text-gray-900">Cambio por nueva línea</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-center text-gray-900">10/10/2022</div>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>



                </section>
            </div>
        </div>

    )
}

export default InfoProyectoLider;