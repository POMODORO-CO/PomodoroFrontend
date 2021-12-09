import { gql } from '@apollo/client'


const GET_USUARIOS = gql `
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

const GET_USUARIO = gql `
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

const GET_PROYECTOS = gql `
query getProyectos {
    Proyectos {
      _id
      nombre_proyecto
      lider_proyecto {
        nombre_usuario
        apellido_usuario
      }
    }
  }
`;

const GET_PROYECTOS_LIDER = gql `
query ProyectosLider($liderProyecto: String!) {
  ProyectosLider(lider_proyecto: $liderProyecto) {
    _id
    nombre_proyecto
    lider_proyecto {
      nombre_usuario
      apellido_usuario
    }
  }
}
`;

export { GET_USUARIOS, GET_USUARIO, GET_PROYECTOS, GET_PROYECTOS_LIDER };