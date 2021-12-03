import React from "react";
import { useParams, Link } from "react-router-dom";

import { useMutation, useQuery } from '@apollo/client';
import { GET_USUARIO } from "../../graphql/users/queries";
import useFormData from "./useForm";
import { EDITAR_USUARIO } from "../../graphql/users/mutations";
import { useEffect } from "react/cjs/react.development";
import Navbar from '../../components/Navbar/Navbar'

const EditarUsuario = () => {

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
        console.log("fin submit")
    };

    //execute every time the variable mutationData change
    useEffect(() => {
        console.log("mutacion edicion ", mutationData)
    }, [mutationData])

    //loading initial information in the queary
    if (queryLoading) return (<div>Cargando........</div>)

    return (
        <> 
            <Navbar />
            <Link to={`/pruebaBack`}>
                <i>Ir atras</i></Link>
            <br />
            <hr />

            <div> Editando Usuario numero: {_id}</div>
            <br />
            <hr />

            <form onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}>

                <div>
                    <label>nombre
                        <input
                            defaultValue={queryData.Usuario.nombre_usuario}
                            type="text"
                            name="nombreUsuario" />
                    </label>
                </div>

                <div>
                    <label>Apellido
                        <input
                            defaultValue={queryData.Usuario.apellido_usuario}
                            type="text"
                            name="apellidoUsuario" />
                    </label>
                </div>

                <div>
                    <label>documento
                        <input
                            defaultValue={queryData.Usuario.documento_usuario}
                            type="text"
                            name="documentoUsuario" />
                    </label>
                </div>


                <div>
                    <label>Tipo Documento
                        <input
                            defaultValue={queryData.Usuario.tipo_documento_usuario}
                            type="text"
                            name="tipoDocumentoUsuario" />
                    </label>
                </div>


                <div>
                    <label htmlFor='password_usuario'>Pass
                        <input
                            defaultValue={queryData.Usuario.password_usuario}
                            type="password"
                            name="passwordUsuario" />
                    </label>
                </div>


                <div>
                    <label>Rol
                        <input
                            defaultValue={queryData.Usuario.rol_usuario}
                            type="text"
                            name="rolUsuario" />
                    </label>
                </div>

                <div>
                    <label>correo
                        <input
                            defaultValue={queryData.Usuario.email_usuario}
                            type="text"
                            name="emailUsuario" />
                    </label>
                </div>

                <button>Editar</button>

            </form>
        </>
    )

};
export default EditarUsuario;