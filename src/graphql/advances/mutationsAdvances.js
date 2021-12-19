import { gql } from '@apollo/client'


const ACTUALIZAR_OBSERVACIONES=gql`
mutation EditarAvanceObservaciones(
    $id: ID!, 
    $observacionesAvance: String!
    ) {
    editarAvanceObservaciones(
      _id: $id, 
      observaciones_avance: $observacionesAvance
      ) {
      _id
    }
  }
`;
export {ACTUALIZAR_OBSERVACIONES};
