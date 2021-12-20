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
            console.log("Datos avances", dataAvance)
            toast.info('Observacion Realizada', {toastId: 'error',});
        }
        
    }, [dataAvance]);


    if (loadingAvance) return (<div>Cargando........</div>)
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
                            console.log(dataObservacion)
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
                <br />
                <section className=' item-row'>
                    <div className="flex items-center flex-col text-middle">



                        {dataAvance &&

                            <div>
                                <h1 >{`Avance del proyecto: ${dataAvance.Avance.proyecto.nombre_proyecto}`}</h1>
                                <br />
                                <h1>{`Realizado por : ${dataAvance.Avance.usuario_avance.nombre_usuario} ${dataAvance.Avance.usuario_avance.apellido_usuario}`}</h1>
                                <h1>{`Fecha del Avance: ${dataAvance.Avance.fecha_avance.split("T")[0]}`}</h1>
                                <br />
                                <label>Descripcion del avance: </label>
                                <p>{`Avance del proyecto: ${dataAvance.Avance.descripcion_avance}`}

                                </p>
                                <div>
                                    <br />
                                    <label> observaciones anteriores:</label>
                                    <br />
                                    <p className="bg-blue-300">
                                        {dataAvance.Avance.observaciones_avance}
                                    </p>
                                    <br />
                                </div>

                                <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
                                    <label >Modificar Observaciones:</label>
                                    <div>
                                    <input name="observacionesAvance" type="text" className="w-80 h-80 bg-blue-400" defaultValue={dataAvance.Avance.observaciones_avance}/>
                                    </div>
                                    <br />
                                    <button type="submit" className="appearance-none block w-full bg-blue-600 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> modificar</button>
                                    <br />
                                </form>
                            </div>

                        }
                        <NavLink to={`/private/Proyecto/Avances/${dataAvance.Avance.proyecto._id}`} className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> ir atras</NavLink>
                    </div>
                    <br />
                </section>

            </PrivateRoute>
        </>
    )
}
export default EditObservacionAvance;