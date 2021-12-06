
import {gql} from '@apollo/client'

const REGISTRO =gql`
mutation Registro(
    $nombreUsuario: String!
    $apellidoUsuario: String!
    $documentoUsuario: String!
    $tipoDocumentoUsuario: Enum_documento_usuario!
    $emailUsuario: String!
    $rolUsuario: Enum_Rol!
    $passwordUsuario: String!
  ) {
    registro(
      nombre_usuario: $nombreUsuario
      apellido_usuario: $apellidoUsuario
      documento_usuario: $documentoUsuario
      tipo_documento_usuario: $tipoDocumentoUsuario
      email_usuario: $emailUsuario
      rol_usuario: $rolUsuario
      password_usuario: $passwordUsuario
    ) {
      token
      error
    }
  }
`;

const LOGIN =gql`
  mutation Login(
  $emailUsuario: String!, 
  $passwordUsuario: String!
  ) {
  login(
    email_usuario: $emailUsuario, 
    password_usuario: $passwordUsuario
    ) {
    token
    error
  }
}
`;

const REFRESH_TOKEN=gql`
mutation RefreshToken {
  refreshToken {
    token
    error
  }
}
`;
export {
  REGISTRO,
  LOGIN,
  REFRESH_TOKEN};