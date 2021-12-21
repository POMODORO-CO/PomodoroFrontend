import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useParams } from 'react-router-dom';

import Navbar from '../../../components/Navbar/Navbar';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import useFormData from '../../../components/UseForm/useForm';
import { useUser } from '../../../context/userContext';
import { CREAR_AVANCE } from '../../../graphql/advances/mutationsAdvances';
import imagenes from '../../../assets/img/imagenes';

const AddAvance = () => {

    const { _id } = useParams();

    const { userData } = useUser();
    const proyecto = String(_id)
    const usuarioAvance = String(userData._id)
    const fechaAvance = new Date().toISOString().split("T")[0]

    const { form, formData, updateFormData } = useFormData();

    const [guardarAvance, {
        data: dataGuardar,
        loading: loadingGuardar,
        error: errorGuardar }] = useMutation(CREAR_AVANCE);

    useEffect(() => {
        if (dataGuardar) {
            toast.info('Avance Realizado', { toastId: 'error-1', });
        }

    }, [dataGuardar]);


    if (loadingGuardar) {
        return (
            <div className='min-h-screen flex justify-center items-center bg-gray-500'>
                <div className='bg-yellow-400 rounded-full flex min-w-max p-2'>
                    <img src={imagenes.imag1} alt="Logo empresa" className='md:p-1 h-20 w-20 animate-pulse' />
                    <p className='md:p-7 animate-pulse text-2xl font-bold'>Cargando Login...just wait</p>
                </div>
            </div>
        )
    };
    if (errorGuardar) {
        toast.error('No se pudieron extraer los avances del proyecto', { toastId: 'error-2', });
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log("adada", formData)
        const descripcionAvance = formData.descripcionAvance;

        if (formData.descripcionAvance) {
            confirmAlert({
                title: 'Crear Avance',
                message: '¿Confirmas la creación del avance al proyecto?',
                buttons: [
                    {
                        label: 'Sí',
                        onClick: () => {
                            {
                                console.log('ent');
                                console.log('as');
                            }
                            guardarAvance(
                                {
                                    variables: { proyecto, usuarioAvance, fechaAvance, descripcionAvance }
                                }
                            )

                            //alert('Inscripción negada')

                            //window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => alert('Cancelacion de creación de avance')
                    }
                ]
            });
        }
    };
    return (
        <div>

            <PrivateRoute rolelist={["ESTUDIANTE"]}>
                <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />
                <Navbar />
                <br />
                <h1> Añadir Avance al proyecto:</h1>
                <br />

                <div>
                    <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
                        <input type="text" name="descripcionAvance" className="w-80 h-80 bg-blue-400 border-black " />
                        <br />
                        <br />
                        <button type='submit' className=" px-6 py-4 appearance-none block  bg-blue-600 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"> Guardar Avance</button>
                        <br />
                    </form>
                    
                    <NavLink to={`/private/Proyecto/Avances/estudiante/${_id}`} className="appearance-none block bg-blue-400 hover:bg-yellow-400 text-white font-bold  w-20 rounded focus:outline-none focus:shadow-outline">Atras</NavLink>
                </div>
                <br />
            </PrivateRoute>
        </div>

    )
};
export default AddAvance;