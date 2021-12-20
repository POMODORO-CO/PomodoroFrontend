import { gql } from '@apollo/client'

const CREAR_INSCRIPCION=gql`
mutation CrearInscripcion(
  $inscripcionProyecto: String!, 
  $estudiante: String!
  ) {
  crearInscripcion(
    inscripcion_proyecto: $inscripcionProyecto, 
    estudiante: $estudiante
    ) {
    _id
    estado_inscripcion
  }
}
`;

const ELIMINAR_INSCRIPCION=gql`
mutation EliminarInscripcion(
    $_id: String!
    ) {
    eliminarInscripcion(
      _id: $_id
      ) {
      _id
    }
  }

`;
const APROBAR_INSCRIPCION=gql`
mutation AprobarInscripcion(
  $_id: ID!
  ) {
  aprobarInscripcion(
    _id: $_id
    ) {
    _id
  }
}
`;
const NEGAR_INSCRIPCION=gql`
mutation NegarInscripcion(
  $_id: ID!
  ) {
  negarInscripcion(
    _id: $_id
    ) {
    _id
  }
}
`;

export{ELIMINAR_INSCRIPCION,APROBAR_INSCRIPCION,NEGAR_INSCRIPCION, CREAR_INSCRIPCION};