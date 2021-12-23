import React, { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { AVANCE } from "../../../graphql/advances/queriesAdvances";
import { ACTUALIZAR_DESCRIPCIONES } from '../../../graphql/advances/mutationsAdvances'
import PrivateRoute from "../../../components/PrivateRoute/PrivateRoute";
import useFormData from "../../../components/UseForm/useForm";
import Navbar from "../../../components/Navbar/Navbar";
import imagenes from "../../../assets/img/imagenes";


const EditDescripcionAvance = () => {
    const { _id } = useParams();
    const { form, formData, updateFormData } = useFormData();
    
    const {
        data: dataAvance,
        loading: loadingAvance,
        error: errorAvance } = useQuery(AVANCE, { variables: { _id } })

    const [subirDescripcion, {
        data: dataDescripcion,
        loading: loadingDescripcion,
        error: errorDescripcion }] = useMutation(ACTUALIZAR_DESCRIPCIONES)

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
    if (errorDescripcion) {
        toast.error('No se pudieron extraer los avances del proyecto', { toastId: 'error-obser', });
    }
    if (loadingDescripcion) {
        toast.info('Subiendo observaciones', { toastId: 'loading-obser', });
    }


    const submitForm = (e) => {
        e.preventDefault();
        
        const descripcionAvance =formData.descripcionAvance;

        if (formData.descripcionAvance) {
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
                            subirDescripcion(
                                {
                                    variables: { _id, descripcionAvance }
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
            <PrivateRoute rolelist={["ESTUDIANTE"]}>
                <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />
                <Navbar />
                <br />
                <section className='item-row bg-gray-900'>
                    <div className="flex items-center flex-col text-middle">
                        {dataAvance &&
                            <div>
                                <div className='bg-black inline-flex justify-center items-center rounded-full'>
                                <h1>{`Avance del proyecto: ${dataAvance.Avance.proyecto.nombre_proyecto}`}</h1>
                                </div>
                                <h1>{`Realizado por : ${dataAvance.Avance.usuario_avance.nombre_usuario} ${dataAvance.Avance.usuario_avance.apellido_usuario}`}</h1>
                                <h1>{`Realizado por : ${dataAvance.Avance.usuario_avance.nombre_usuario} ${dataAvance.Avance.usuario_avance.apellido_usuario}`}</h1>
                                <h1>{`Fecha del Avance: ${dataAvance.Avance.fecha_avance.split("T")[0]}`}</h1>
                                <label>Descripcion del avance: </label>
                                <p>{`Avance del proyecto: ${dataAvance.Avance.descripcion_avance}`}
                                </p>
                                <div>
                                    <label> observaciones anteriores:</label>
                                    <p className="bg-blue-300">
                                        {dataAvance.Avance.observaciones_avance}
                                    </p>
                                </div>
                                <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
                                    <label >Modificar Observaciones:</label>
                                    <div>
                                    <input name="descripcionAvance" type="text" className="w-80 h-80 bg-blue-400" defaultValue={dataAvance.Avance.descripcion_avance}/>
                                    </div>
                                    <button type="submit" className="appearance-none block w-full bg-blue-600 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> modificar</button>
                                </form>
                            </div>
                        }
                        <NavLink to={`/private/Proyecto/Avances/estudiante/${dataAvance.Avance.proyecto._id}`} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> ir atras</NavLink>
                    </div>
                </section>
            </PrivateRoute>
        </>
    )
}
export default EditDescripcionAvance;