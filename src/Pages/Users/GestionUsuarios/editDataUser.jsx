import react, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { GET_USUARIO } from "../../../graphql/users/queries.js";
import useFormData from "../../../components/UseForm/useForm.js";
import { EDITAR_USUARIO } from "../../../graphql/users/mutations.js";
import Navbar from '../../../components/Navbar/Navbar'

function EditDataUser() {

      //Hook that is build in the file useForm that i need 3 variables
      const { form, formData, updateFormData } = useFormData(null);

      // is the last part of the link i use before /pruebaBack/editar/${u._id} take the _id variable 
      const { _id } = useParams();
  
      //Query with the information that i will change for the _id user
      const {
          loading: queryLoading,
          error: queryError,
          data: queryData
      } = useQuery(GET_USUARIO, { variables: { _id } },);
  
      //function editarUsuario that use the mutation "EDITAR_USUARIO"
      const [editarUsuario,
          { data: mutationData,
              loading: MutationLoading,
              error: mutationError }] = useMutation(EDITAR_USUARIO)
  
      // function that sumit the info into the variable editarUsuario
      const submitForm = (e) => {
          e.preventDefault();
          editarUsuario({
              variables: { _id, ...formData }
          })
          console.log("fin submit")
      };
  
      //execute every time the variable mutationData change
      useEffect(() => {
          console.log("mutacion edicion ", mutationData)
      }, [mutationData])
  
      //loading initial information in the queary
      if (queryLoading) return (<div>Cargando........</div>)


    return (
        
        <>
            <Navbar />
            <div className='min-h-screen grid place-content-center bg-white'>
                <div className="w-full max-w-xs m-6">
                    <div className='bg-gray-200 inline-flex justify-center items-center rounded-full'>
                        <div className='bg-white text-black font-bold px-2 rounded-full m-1'>
                            Editando usuario número:
                        </div>
                    </div>
                    <div className='text-black px-11 py-3 bg-yellow-400 rounded-full m-1 font-bold'> {_id} </div>
                    <form onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form}>
                        <div className='w-full md:w-1/2 px-3'>
                            <label className="text-black text-sm font-bold mb-2"> Nombre  </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    defaultValue={queryData.Usuario.nombre_usuario}
                                    type="text"
                                    name="nombreUsuario" />
                        </div>
                        <div>
                            <label>Apellido
                                <input
                                    defaultValue={queryData.Usuario.apellido_usuario}
                                    type="text"
                                    name="apellidoUsuario" />
                            </label>
                        </div>
                        <div>
                            <label>documento
                                <input
                                    defaultValue={queryData.Usuario.documento_usuario}
                                    type="text"
                                    name="documentoUsuario" />
                            </label>
                        </div>
                        <div>
                            <label>Tipo Documento
                                <input
                                    defaultValue={queryData.Usuario.tipo_documento_usuario}
                                    type="text"
                                    name="tipoDocumentoUsuario" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor='password_usuario'>Pass
                                <input
                                    defaultValue={queryData.Usuario.password_usuario}
                                    type="password"
                                    name="passwordUsuario" />
                            </label>
                        </div>
                        <div>
                            <label>Rol
                                <input
                                    defaultValue={queryData.Usuario.rol_usuario}
                                    type="text"
                                    name="rolUsuario" />
                            </label>
                        </div>
                        <div>
                            <label>correo
                                <input
                                    defaultValue={queryData.Usuario.email_usuario}
                                    type="text"
                                    name="emailUsuario" />
                            </label>
                        </div>
                        <button>Editar</button>
                        <Link to={`/GestionUsuarios`}>
                            <i>Ir atras</i></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditDataUser
