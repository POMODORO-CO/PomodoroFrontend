import { gql } from '@apollo/client'

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
export  {GET_PROYECTOS_LIDER,GET_PROYECTOS};