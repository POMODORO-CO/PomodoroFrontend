import React from "react";
import { useParams, Link } from "react-router-dom";

import { useMutation, useQuery } from '@apollo/client';
import { GET_USUARIO } from "../../graphql/users/queries";
import useFormData from "./useForm";
import { EDITAR_USUARIO } from "../../graphql/users/mutations";
import { useEffect } from "react/cjs/react.development";

const EditarUsuario = () => {

    const { form, formData, updateFormData } = useFormData(null);

    const { _id } = useParams();
    const { loading: queryLoading,
        error: queryError,
        data: queryData } = useQuery(GET_USUARIO, { variables: { _id } },);

    const [editarUsuario,
        { data: mutationData,
            loading: MutationLoading,
            error: mutationError }] = useMutation(EDITAR_USUARIO)



    const submitForm = (e) => {
        e.preventDefault();
        editarUsuario({
            variables: { _id, ...formData }
        })
        console.log("fin submit")
    };

    useEffect(() => {
        console.log("mutacion edicion ", mutationData)
    }, [mutationData])

    if (queryLoading) return (<div>Cargando........</div>)

    return (
        <>
            <Link to={`/pruebaBack`}>
                <i>Ir atras</i></Link>
                
            <br />
            <hr />

            <div> Editando Usuario {_id}</div>
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