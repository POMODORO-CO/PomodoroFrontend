import react, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GET_USUARIO } from "../../../graphql/users/queries.js";
import useFormData from "../../../components/UseForm/useForm.js";
import { EDITAR_ESTADO_USUARIO } from "../../../graphql/users/mutations.js";
import Navbar from '../../../components/Navbar/Navbar';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute.jsx';


function EditDataUser() {
    const navigate= useNavigate();
    //Hook that is build in the file useForm that i need 3 variables
    const { form, formData, updateFormData } = useFormData();

    // is the last part of the link i use before /pruebaBack/editar/${u._id} take the _id variable 
    const { _id } = useParams();

    //Query with the information that i will change for the _id user
    const {
        loading: queryLoading,
        error: queryError,
        data: queryData
    } = useQuery(GET_USUARIO, { variables: { _id } },);

    //function editarUsuario that use the mutation "EDITAR_USUARIO"
    const [editarUsuario,
        { data: mutationData,
            loading: MutationLoading,
            error: mutationError }] = useMutation(EDITAR_ESTADO_USUARIO)

    // function that sumit the info into the variable editarUsuario
    const submitForm = (e) => {
        e.preventDefault();
        const estadoUsuario = formData.estadoUsuario ;
        editarUsuario({
            variables: { _id, estadoUsuario }
        })
    };

    //execute every time the variable mutationData change
    useEffect(() => {
        console.log("mut",mutationData)
        if(mutationData){
            toast.info('Estado Editado completada', {
                toastId: 'mutation-estado',
            });
            navigate('/private/GestionUsuarios');
        }
    }, [mutationData])

    //loading initial information in the queary
    if (queryLoading) return (<div className='min-h-screen flex justify-center items-center bg-gray-500'>
        <div className='bg-yellow-400 rounded-full flex min-w-max p-2'>
            <img src={imagenes.imag1} alt="Logo empresa" className='md:p-1 h-20 w-20 animate-pulse' />
            <p className='md:p-7 animate-pulse text-2xl font-bold'>Cargando Login...just wait</p>
        </div>
    </div>)
    if (MutationLoading) {
        toast.info('Editando Estado usuario', {
          toastId: 'loading',
      });
      }
      if (mutationError) {
        toast.error('Error estado usuario', {
          toastId: 'error',
      });
      }

      if(queryError){
        toast.error('No se puede traer informacion del usuario', {
            toastId: 'error',
        });
      }
    return (
        <>
            <PrivateRoute rolelist={["ADMINISTRADOR","LIDER"]}>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
            />
                <Navbar />
                <div className='min-h-screen grid place-content-center bg-gray-500 px-7 py-1'>
                    <div>
                        <div className='text-white inline-flex justify-center items-center rounded-full mb-1'>
                            Editando usuario número:
                        </div>
                        <div className='text-black px-11 py-3 bg-yellow-400 rounded-lg m-1 font-bold'> {_id} </div>


                        <form className="w-full max-w-lg" onSubmit={submitForm} onChange={updateFormData} ref={form}>

                            <label className="text-white text-sm font-bold mb-1">Nombre</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                defaultValue={queryData.Usuario.nombre_usuario} type="text" name="nombreUsuario" />

                            <label className="text-white text-sm font-bold mb-1">Apellido</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                defaultValue={queryData.Usuario.apellido_usuario} type="text" name="apellidoUsuario" />


                            <label className="text-white text-sm font-bold mb-1"> Documento </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                defaultValue={queryData.Usuario.documento_usuario} type="text" name="documentoUsuario" />

                            <label className="text-white text-sm font-bold mb-1"> Tipo Documento </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                defaultValue={queryData.Usuario.tipo_documento_usuario}
                                type="text"
                                name="tipoDocumentoUsuario" />

                            <label className="text-white text-sm font-bold mb-1"> Rol usuario </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                defaultValue={queryData.Usuario.rol_usuario}
                                type="text"
                                name="rolUsuario" />

                            <label className="text-white text-sm font-bold mb-1"> Email </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                defaultValue={queryData.Usuario.email_usuario}
                                type="text"
                                name="emailUsuario" />

                            <label className="text-white text-sm font-bold mb-1"> Estado usuario </label>
                            <select className="block appearance-none w-full bg-white-200 border border-blue-900 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                defaultValue={queryData.Usuario.estado_usuario}
                                name="estadoUsuario">
                                <option>AUTORIZADO</option>
                                <option>NO_AUTORIZADO</option>
                                <option>PENDIENTE</option>
                            </select>

                            <div className="py-2 px-6">
                            <button type='submit' className="py-2 px-6 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Editar Estado</button>
                            <Link to={`/private/GestionUsuarios`}>
                                <button className="py-2 px-6 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Ir atrás</button>
                            </Link>

                            </div>

                        </form>
                        
                    </div>
                </div>
            </PrivateRoute>
        </>
    )
}

export default EditDataUser
