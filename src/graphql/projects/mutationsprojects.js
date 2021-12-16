import { gql } from '@apollo/client'

const CREAR_PROYECTO = gql `
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

const EDITAR_ESTADO_PROYECTO = gql `
mutation EditarEstadoProyecto($_id: String!, $estadoProyecto: String!) {
  editarEstadoProyecto(_id: $_id, estado_proyecto: $estadoProyecto) {
    _id
    estado_proyecto
  }
}
`;

const EDITAR_FASE_PROYECTO = gql `
mutation EditarFaseProyecto($_id: String!, $faseProyecto: Enum_faseProyecto!) {
  editarFaseProyecto(_id: $_id, fase_proyecto: $faseProyecto) {
    _id
    fase_proyecto
  }
}
`;

const EDITAR_PROYECTO_LIDER = gql `
mutation EditarProyecto($_id: String!, $nombreProyecto: String, $objetivosProyecto: [editarObjetivo], $presupuestoProyecto: Float) {
  editarProyecto(_id: $_id, nombre_proyecto: $nombreProyecto, objetivos_proyecto: $objetivosProyecto, presupuesto_proyecto: $presupuestoProyecto) {
    nombre_proyecto
    objetivos_proyecto {
      descripcion
      tipo
    }
    presupuesto_proyecto
  }
}
`;

const CREAR_AVANCE = gql `
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

const INCRIPCION_ESTUDIANTE = gql `
mutation CrearInscripcion($inscripcionProyecto: String!, $estudiante: String!) {
  crearInscripcion(inscripcion_proyecto: $inscripcionProyecto, estudiante: $estudiante) {
    estado_inscripcion
  }
}
`;

export { CREAR_PROYECTO, EDITAR_ESTADO_PROYECTO, EDITAR_FASE_PROYECTO, EDITAR_PROYECTO_LIDER, CREAR_AVANCE, INCRIPCION_ESTUDIANTE };