import { useQuery } from "@apollo/client";
import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from '../../../../components/PrivateRoute/PrivateRoute';
import { AVANCES_PROJECTO } from '../../../../graphql/advances/queriesAdvances'
const AvanceLider = () => {
    const { _id } = useParams();
    const proyecto = _id;
    console.log(_id)
    const {
        data: dataAvances,
        loading: loadingAvances,
        error: errorAvances } = useQuery(AVANCES_PROJECTO, { variables: { proyecto } })

    if (loadingAvances) return (<div>Cargando........</div>)
    if (errorAvances) {
        toast.error('No se pudieron extraer los avances del proyecto', {
            toastId: 'error',
        });
    }
    // useEffect(() => {
    //     console.log("Datos avances", dataAvances)
    // }, [dataAvances])

    return (
        <>
            <PrivateRoute rolelist={["LIDER"]}>
                <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />

                <div className="flex items-center flex-col text-middle">

                    <h1>{`Avances proyecto ${_id}`}</h1>

                    <div className="box pt-6">
                        <div className="box-wrapper">

                            <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                                <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                <input type="search" name="" id="" placeholder="Buscar.." x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                                <div className="select">
                                    <select name="" id="" x-model="image_type" className="text-sm outline-none focus:outline-none bg-transparent">
                                        <option defaultValue="all" defaultValue>Todo</option>
                                        <option defaultValue="photo">ID</option>
                                        <option defaultValue="illustration">Nombre del proyecto</option>
                                        <option defaultValue="vector">Líder</option>
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

                                            <th scope="col" className="px-15 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                                Nombre Estudiante
                                            </th>


                                            <th scope="col" className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                                Descripción Avance
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Fecha Avance
                                            </th>
                                            <th scope="col" className="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Observaciones
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">

                                        {dataAvances && dataAvances.AvancesOneProject.map((u) => {
                                            return (
                                                <>
                                                <tr key={u._id}>


                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {u.usuario_avance.nombre_usuario + " " + u.usuario_avance.apellido_usuario}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {u.descripcion_avance}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {u.fecha_avance.split("T")[0]}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                    <input type='text' className="text-sm text-gray-900" defaultValue={u.observaciones_avance} />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                        <a><button className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type='submit'>
                                                            Guardar Observaciones
                                                        </button></a>
                                                    </td>
                                                </tr>
                                                </>
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
export default AvanceLider;