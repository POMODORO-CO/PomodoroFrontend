import React from "react";
import { useParams, Link } from "react-router-dom";

import { useMutation, useQuery } from '@apollo/client';
import { GET_USUARIO } from "../../graphql/users/queries";
import useFormData from "./Miperfil/useForm";
import { EDITAR_USUARIO } from "../../graphql/users/mutations";
import { useEffect } from "react/cjs/react.development";

const EditarUsuario = () => {

    const { form, formData, updateFormData } = useFormData(null);

    const { _id } = useParams();
    const { loading: queryLoading, error: queryError, data: queryData } = useQuery(GET_USUARIO, { variables: { _id } },);

    const [editarUsuario, { data: mutationData, loading: MutationLoading, error: mutationError }] = useMutation(EDITAR_USUARIO)



    const submitForm = (e) => {
        e.preventDefault();
        console.log("the form data ", formData);
        console.log("the form ", form);
        editarUsuario({
            variables: { _id, ...formData }
        })
    };

    useEffect(() => {
        console.log("mutacion edicion ", mutationData)
    }, [mutationData])

    if (queryLoading) return (<div>Cargando........</div>)
    console.log("someData", queryData)
    return (
        <>
            <div> Editando Usuario {_id}</div>
            <form onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}>

                <div>
                    <label htmlFor='nombre_usuario'>nombre
                        <input 
                            defaultValue={queryData.Usuario.nombre_usuario} 
                            type="text" 
                            name="nombre_usuario" />
                    </label>
                </div>

                <div>
                    <label htmlFor='apellido_usuario'>Apellido
                        <input 
                            defaultValue={queryData.Usuario.apellido_usuario} 
                            type="text" 
                            name="apellido_usuario" />
                    </label>
                </div>

                <div>
                    <label htmlFor='documento_usuario'>documento
                        <input 
                            defaultValue={queryData.Usuario.documento_usuario} 
                            type="text" 
                            name="documento_usuario" />
                    </label>
                </div>


                <div>
                    <label htmlFor='tipo_documento_usuario'>Tipo Documento
                        <input 
                            defaultValue={queryData.Usuario.tipo_documento_usuario} 
                            type="text" 
                            name="tipo_documento_usuario" />
                    </label>
                </div>


                <div>
                    <label htmlFor='password_usuario'>Pass
                        <input 
                            defaultValue={queryData.Usuario.password_usuario} 
                            type="password" 
                            name="password_usuario" />
                    </label>
                </div>


                <div>
                    <label htmlFor='rol_usuario'>Rol
                        <input 
                            defaultValue={queryData.Usuario.rol_usuario} 
                            type="text" 
                            name="rol_usuario" />
                    </label>
                </div>


                <div>
                    <label htmlFor='estado_usuario'>Estado
                        <input 
                            defaultValue={queryData.Usuario.estado_usuario}
                            type="text" 
                            name="estado_usuario" />
                    </label>
                </div>


                <div>
                    <label htmlFor='email_usuario'>correo
                        <input 
                            defaultValue={queryData.Usuario.email_usuario} 
                            type="text" 
                            name="email_usuario" />
                    </label>
                </div>


                <button onClick={submitForm}>Editar</button>
            </form>
        </>
    )

};
export default EditarUsuario;