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

export { CREAR_PROYECTO };