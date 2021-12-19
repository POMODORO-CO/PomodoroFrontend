import { gql } from '@apollo/client'

const INCRIPCIONES_USUARIO =gql`
query InscripcionesOneUser(
    $estudiante: String!
    ) {
    InscripcionesOneUser(
      estudiante: $estudiante
      ) {
      _id
      estado_inscripcion
      inscripcion_proyecto {
        _id
        nombre_proyecto
        lider_proyecto {
          _id
          nombre_usuario
          apellido_usuario
        }
        estado_proyecto
        fase_proyecto
      }
    }
  }
`;
const INSCRIPCIONES_PENDIENTES=gql`
query InscripcionesOneProjectPendientes(
  $inscripcionProyecto: String!
  ) {
  InscripcionesOneProjectPendientes(
    inscripcion_proyecto: $inscripcionProyecto
    ) {
    _id
    estudiante {
      nombre_usuario
      apellido_usuario
      email_usuario
    }
    estado_inscripcion
  }
}
`;
const INSCRIPCIONES_ACEPTADAS=gql`
query InscripcionesOneProject(
  $inscripcionProyecto: String!
  ) {
  InscripcionesOneProject(
    inscripcion_proyecto: $inscripcionProyecto
    ) {
    _id
    estado_inscripcion
    inscripcion_proyecto {
      nombre_proyecto
    }
    estudiante {
      nombre_usuario
      apellido_usuario
      email_usuario
    }
  }
}
`;
export {INCRIPCIONES_USUARIO,INSCRIPCIONES_PENDIENTES,INSCRIPCIONES_ACEPTADAS};