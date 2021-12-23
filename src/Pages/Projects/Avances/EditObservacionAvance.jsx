import React, { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { AVANCE } from "../../../graphql/advances/queriesAdvances";
import { ACTUALIZAR_OBSERVACIONES } from '../../../graphql/advances/mutationsAdvances'
import PrivateRoute from "../../../components/PrivateRoute/PrivateRoute";
import useFormData from "../../../components/UseForm/useForm";
import Navbar from "../../../components/Navbar/Navbar";
import imagenes from "../../../assets/img/imagenes";


const EditObservacionAvance = () => {
    const { _id } = useParams();
    const { form, formData, updateFormData } = useFormData();
    
    const {
        data: dataAvance,
        loading: loadingAvance,
        error: errorAvance } = useQuery(AVANCE, { variables: { _id } })

    const [subirObservaciones, {
        data: dataObservacion,
        loading: loadingObservacion,
        error: errorObservacion }] = useMutation(ACTUALIZAR_OBSERVACIONES)

    useEffect(() => {
        if(dataAvance){
            toast.info('Observacion Realizada', {toastId: 'error',});
        }
        
    }, [dataAvance]);


    if (loadingAvance){ 
        return (
            <div className='min-h-screen flex justify-center items-center bg-gray-500'>
            <div className='bg-yellow-400 rounded-full flex min-w-max p-2'>
                <img src={imagenes.imag1} alt="Logo empresa" className='md:p-1 h-20 w-20 animate-pulse' />
                <p className='md:p-7 animate-pulse text-2xl font-bold'>Cargando Login...just wait</p>
            </div>
        </div>
        )
    };
    if (errorAvance) {
        toast.error('No se pudieron extraer los avances del proyecto', {toastId: 'error',});
    }
    if (errorObservacion) {
        toast.error('No se pudieron extraer los avances del proyecto', { toastId: 'error-obser', });
    }
    if (loadingObservacion) {
        toast.info('Subiendo observaciones', { toastId: 'loading-obser', });
    }


    const submitForm = (e) => {
        e.preventDefault();
        
        const observacionesAvance =formData.observacionesAvance;

        if (formData.observacionesAvance) {
            confirmAlert({
                title: 'Actualizar Observación',
                message: '¿Confirmas la observación del avance al proyecto?',
                buttons: [
                    {
                        label: 'Sí',
                        onClick: () => {
                            {
                                console.log('ent');
                                console.log('as');
                            }
                            subirObservaciones(
                                {
                                    variables: { _id, observacionesAvance }
                                }
                            )
                            
                            //alert('Inscripción negada')
                            
                            //window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => alert('Cancelacion de la observacion')
                    }
                ]
            });
        }
    };
    return (
        <>
            <PrivateRoute rolelist={["LIDER"]}>
                <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />
                <Navbar />
                <section>
                    <div className="flex items-center flex-col">
                        {dataAvance &&
                            <div className="justify-center items-center">
                                <div className='bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg m-1'>
                                    <section className='inline-flex justify-center items-center rounded-lg'>
                                        <section className='bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg m-1'>
                                            Avance del proyecto :
                                        </section>
                                        <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'>{dataAvance.Avance.proyecto.nombre_proyecto}</p>
                                    </section>
                                    <section className='inline-flex justify-center items-center rounded-lg'>
                                        <section className='bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg m-1'>
                                            Realizado por :
                                        </section>
                                        <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'>{dataAvance.Avance.usuario_avance.nombre_usuario} {dataAvance.Avance.usuario_avance.apellido_usuario}</p>
                                    </section>
                                </div>
                                <div className="bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg m-1">
                                <section className='inline-flex justify-center items-center rounded-full'>
                                    <section className='bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg m-1'>
                                    Fecha del Avance :
                                    </section>
                                    <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'>{dataAvance.Avance.fecha_avance.split("T")[0]}</p>
                                </section>
                                <section className='inline-flex justify-center items-center'>
                                    <section className='text-white font-semibold px-2 m-1'>
                                    Descripcion del avance:
                                    </section>
                                    <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'>{dataAvance.Avance.descripcion_avance}</p>
                                </section>
                                </div>
                                <div className="bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg m-1">
                                    <label className='text-white font-semibold px-3 py-2 rounded-lg m-1'>Observaciones anteriores:</label>
                                    <p className='text-black py-2 bg-yellow-400 m-1 px-2 rounded-lg font-bold'>
                                        {dataAvance.Avance.observaciones_avance}
                                    </p>
                                </div>
                                <div className="bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg m-1">
                                <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
                                    <div>
                                    <label>Modificar Observaciones:</label>
                                    </div>
                                    <div className="mb-3 pt-0">
                                    <input name="observacionesAvance" type="text" className='px-3 py-3 text-black bg-white rounded text-sm border border-blueGray-300 w-full' defaultValue={dataAvance.Avance.observaciones_avance}/>
                                    </div>
                                </form>
                                </div>
                                <button type="submit" className="appearance-none block w-full bg-blue-600 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> Modificar</button>
                            </div>
                        }
                        <div>
                        <NavLink to={`/private/Proyecto/Avances/${dataAvance.Avance.proyecto._id}`} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> ir atras</NavLink>
                        </div>
                    </div>
                    <br />
                </section>

            </PrivateRoute>
        </>
    )
}
export default EditObservacionAvance;