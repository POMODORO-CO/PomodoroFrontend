import {gql} from '@apollo/client'


const GET_USUARIOS=gql`
    query Usuarios {
        Usuarios {
        _id
        apellido_usuario
        nombre_usuario
        documento_usuario
        email_usuario
        estado_usuario
        rol_usuario
        }
    }

`;

const GET_USUARIO=gql`
    query Usuario($_id: String!) {
        Usuario(_id: $_id) {
        _id
        nombre_usuario
        apellido_usuario
        documento_usuario
        password_usuario
        rol_usuario
        estado_usuario
        email_usuario
        tipo_documento_usuario
        }
    }
`;

export {GET_USUARIOS,GET_USUARIO};