import { gql } from '@apollo/client'


const ACTUALIZAR_OBSERVACIONES=gql`
mutation EditarAvanceObservaciones(
  $_id: String!, 
  $observacionesAvance: String!
  ) {
  editarAvanceObservaciones(
    _id: $_id, 
    observaciones_avance: $observacionesAvance
    ) {
    _id
    observaciones_avance
  }
}
`;
const ACTUALIZAR_DESCRIPCIONES=gql`
mutation EditarAvance(
  $id: String!, 
  $descripcionAvance: String!
  ) {
  editarAvance(
    _id: $id, 
    descripcion_avance: $descripcionAvance
    ) {
    _id
    descripcion_avance
  }
}
`;
const CREAR_AVANCE=gql`
mutation CrearAvance(
  $proyecto: String!, 
  $usuarioAvance: String!, 
  $fechaAvance: Date!, 
  $descripcionAvance: String!
  ) {
  crearAvance(
    proyecto: $proyecto, 
    usuario_avance: $usuarioAvance, 
    fecha_avance: $fechaAvance, 
    descripcion_avance: $descripcionAvance
    ) {
    _id
    descripcion_avance
  }
}
`;
export {ACTUALIZAR_OBSERVACIONES, ACTUALIZAR_DESCRIPCIONES,CREAR_AVANCE};
