import { gql } from '@apollo/client'


const EDITAR_USUARIO = gql`
mutation EditarUsuario(
        $_id: String!,
        $nombreUsuario: String, 
        $apellidoUsuario: String, 
        $documentoUsuario: String, 
        $tipoDocumentoUsuario: Enum_documento_usuario, 
        $emailUsuario: String,
        ) {
    editarUsuario(
        _id: $_id, 
        nombre_usuario: $nombreUsuario, 
        apellido_usuario: $apellidoUsuario, 
        documento_usuario: $documentoUsuario, 
        tipo_documento_usuario: $tipoDocumentoUsuario, 
        email_usuario: $emailUsuario, 
        ) {
      _id
      nombre_usuario
      apellido_usuario
      documento_usuario
      tipo_documento_usuario
      email_usuario
    }
  }
`;
const EDITAR_ESTADO_USUARIO=gql`
mutation EditarEstadoUsuario(
  $_id: String!, 
  $estadoUsuario: Enum_estado_usuario!
  ) {
  editarEstadoUsuario(
    _id: $_id, 
    estado_usuario: $estadoUsuario
    ) {
    _id
    nombre_usuario
    apellido_usuario
    estado_usuario
  }
}
`;

export { EDITAR_USUARIO, EDITAR_ESTADO_USUARIO };