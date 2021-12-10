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
    estado_proyecto
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
      estado_proyecto
    }
  }
`;

const GET_PROYECTO = gql `
query Proyecto($_id: String!) {
  Proyecto(_id: $_id) {
    _id
    nombre_proyecto
    lider_proyecto {
      _id
      nombre_usuario
      apellido_usuario
    }
    estado_proyecto
    objetivos_proyecto {
      _id
      descripcion
      tipo
    }
    fase_proyecto
    presupuesto_proyecto
    fecha_inicio_proyecto
    fecha_fin_proyecto
    avances_proyecto {
      usuario_avance {
        email_usuario
      }
      descripcion_avance
      observaciones_avance
      fecha_avance
    }
  }
}
`;
export { GET_PROYECTOS_LIDER, GET_PROYECTOS, GET_PROYECTO };