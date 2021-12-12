import { gql } from '@apollo/client'

const CREAR_PROYECTO = gql`
mutation CrearProyecto(
  $nombreProyecto: String!, 
  $liderProyecto: String!, 
  $presupuestoProyecto: Float!, 
  $fechaInicioProyecto: Date!,
  $fechaFinProyecto: Date, 
  $objetivosProyecto: [crearObjetivo]!) {
  crearProyecto(
    nombre_proyecto: $nombreProyecto, 
    lider_proyecto: $liderProyecto, 
    presupuesto_proyecto: $presupuestoProyecto, 
    fecha_inicio_proyecto: $fechaInicioProyecto, 
    fecha_fin_proyecto: $fechaFinProyecto, 
    objetivos_proyecto: $objetivosProyecto) {
      _id
      nombre_proyecto
      fase_proyecto
      estado_proyecto
  }
}
`;

const CREAR_AVANCE = gql`
mutation CrearAvance(
  $proyecto: String!,
  $usuarioAvance: String!, 
  $fechaAvance: Date!, 
  $descripcionAvance: String!) {
    crearAvance(
      proyecto: $proyecto, 
      usuario_avance: $usuarioAvance, 
      fecha_avance: $fechaAvance, 
      descripcion_avance: $descripcionAvance)
}`;

export { CREAR_PROYECTO, CREAR_AVANCE };