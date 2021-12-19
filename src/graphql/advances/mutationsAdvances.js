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
export {ACTUALIZAR_OBSERVACIONES};
