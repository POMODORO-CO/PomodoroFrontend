import react, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { GET_USUARIO } from "../../../graphql/users/queries.js";
import useFormData from "../../../components/UseForm/useForm.js";
import { EDITAR_USUARIO } from "../../../graphql/users/mutations.js";
import Navbar from '../../../components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';

function EditDataUser() {

    //Hook that is build in the file useForm that i need 3 variables
    const { form, formData, updateFormData } = useFormData(null);

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
            error: mutationError }] = useMutation(EDITAR_USUARIO)

    // function that sumit the info into the variable editarUsuario
    const submitForm = (e) => {
        e.preventDefault();
        editarUsuario({
            variables: { _id, ...formData }
        })
    };

    //execute every time the variable mutationData change
    useEffect(() => {
        console.log("mutacion edicion ", mutationData)
    }, [mutationData])

    //loading initial information in the queary
    if (queryLoading) return (<div>Cargando........</div>)


    return (
        <>
            <PrivateRoute rolelist={["ESTUDIANTE", "ADMINISTRADOR"]}>
                <Navbar />
                <div className='min-h-screen grid place-content-center bg-gray-500 px-7 py-1'>
                    <div>
                        <div className='text-white inline-flex justify-center items-center rounded-full mb-1'>
                            Editando usuario número:
                        </div>
                        <div className='text-black px-11 py-3 bg-yellow-400 rounded-lg m-1 font-bold'> {_id} </div>
                        <form className="w-full max-w-lg" onSubmit={submitForm} onChange={updateFormData} ref={form}>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <label className="text-white text-sm font-bold mb-1">Nombre</label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    defaultValue={queryData.Usuario.nombre_usuario} type="text" name="nombreUsuario" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <label className="text-white text-sm font-bold mb-1"> Documento </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    defaultValue={queryData.Usuario.documento_usuario} type="text" name="documentoUsuario" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <label className="text-white text-sm font-bold mb-1"> Tipo Documento </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    defaultValue={queryData.Usuario.tipo_documento_usuario}
                                    type="text"
                                    name="tipoDocumentoUsuario" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <label className="text-white text-sm font-bold mb-1"> Password </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    defaultValue={queryData.Usuario.password_usuario}
                                    type="password"
                                    name="passwordUsuario" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <label className="text-white text-sm font-bold mb-1"> Rol usuario </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    defaultValue={queryData.Usuario.rol_usuario}
                                    type="text"
                                    name="rolUsuario" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <label className="text-white text-sm font-bold mb-1"> Email </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    defaultValue={queryData.Usuario.email_usuario}
                                    type="text"
                                    name="emailUsuario" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-16 place-content-center">
                                <div className="py-2 px-6">
                                    <button className="py-2 px-6 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Editar</button>
                                </div>
                                <div className="py-2 px-6">
                                    <Link to={`/private/GestionUsuarios`}>
                                        <button className="py-2 px-6 text-white font-bold rounded-full bg-blue-900 shadow-lg block md:inline-block">Ir atrás</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </PrivateRoute>
        </>
    )
}

export default EditDataUser
