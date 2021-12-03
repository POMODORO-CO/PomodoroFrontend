import { gql } from '@apollo/client'


const EDITAR_USUARIO = gql`
mutation EditarUsuario(
        $_id: String!,
        $nombreUsuario: String!, 
        $apellidoUsuario: String!, 
        $documentoUsuario: String!, 
        $tipoDocumentoUsuario: Enum_documento_usuario!, 
        $emailUsuario: String!, 
        $rolUsuario: Enum_Rol!, 
        $passwordUsuario: String!
        ) {
    editarUsuario(
        _id: $_id, 
        nombre_usuario: $nombreUsuario, 
        apellido_usuario: $apellidoUsuario, 
        documento_usuario: $documentoUsuario, 
        tipo_documento_usuario: $tipoDocumentoUsuario, 
        email_usuario: $emailUsuario, 
        rol_usuario: $rolUsuario, 
        password_usuario: $passwordUsuario) {
      _id
      nombre_usuario
      apellido_usuario
      documento_usuario
      tipo_documento_usuario
      email_usuario
      estado_usuario
      rol_usuario
      password_usuario
    }
  }
`;

export { EDITAR_USUARIO,
         };