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
const AVANCE=gql`
query Avance(
  $_id: String!
  ) {
  Avance(
    _id: $_id
    ) {
    _id
    observaciones_avance
    descripcion_avance
    fecha_avance
    usuario_avance {
      nombre_usuario
      apellido_usuario
    }
    proyecto {
      _id
      nombre_proyecto
    }
  }
}
`;
export {AVANCES_PROJECTO,AVANCE};