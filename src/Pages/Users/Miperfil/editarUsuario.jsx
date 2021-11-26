import React from "react";
import { useParams, Link } from "react-router-dom";

import { useQuery } from '@apollo/client';
import { GET_USUARIO } from "../../../graphql/users/queries";

const EditarUsuario = () => {

    const { _id } = useParams();
    const { loading, error, data } = useQuery(GET_USUARIO, {variables : { _id }},);

    if (loading) return (<div>Cargando........</div>)
    console.log(data)
    return (
        <>
            <div> Editando Usuario {_id}</div>
            <form action="cosas">

                <label >nombre    </label>
                <input defaultValue={data.Usuario.nombre_usuario} type="text" />

                <label >Apellido    </label>
                <input defaultValue={data.Usuario.apellido_usuario} type="text" />

                <label >documento    </label>
                <input defaultValue={data.Usuario.documento_usuario} type="text" />
                
                <label >Tipo Documento    </label>
                <input defaultValue={data.Usuario.tipo_documento_usuario} type="text" />

                <label >Pass    </label>
                <input defaultValue={data.Usuario.password_usuario} type="text" />

                <label >Rol    </label>
                <input defaultValue={data.Usuario.rol_usuario} type="text" />

                <label >Estado    </label>
                <input defaultValue={data.Usuario.estado_usuario} type="text" />
                
                <label >correo    </label>
                <input defaultValue={data.Usuario.email_usuario} type="text" />

                <button>Editar</button>
            </form>
        </>
    )

};
export default EditarUsuario;