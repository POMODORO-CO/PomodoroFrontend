import { gql } from '@apollo/client'

const AVANCES_PROJECTO=gql`
query AvancesOneProject(
    $proyecto: String!
    ) {
    AvancesOneProject(
      proyecto: $proyecto
      ) {
      _id
      usuario_avance {
        nombre_usuario
        apellido_usuario
      }
      descripcion_avance
      fecha_avance
      observaciones_avance
    }
  }
`;

export {AVANCES_PROJECTO};