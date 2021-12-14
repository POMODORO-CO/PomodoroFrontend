import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import imagenes from '../../../assets/img/imagenes';
import { useQuery } from '@apollo/client';
import { GET_USUARIO } from '../../../graphql/users/queries.js';
import { useUser } from '../../../context/userContext';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router";
import useFormData from '../../../components/UseForm/useForm.js';
import { EDITAR_USUARIO } from "../../../graphql/users/mutations";
import { useAuth } from "../../../context/authContext";

function EditPerfil() {
    const { userData } = useUser();
    const _id = userData._id;
    const rolUsuario = userData.rol_usuario
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading } = useQuery(GET_USUARIO, { variables: { _id , rolUsuario} })
        console.log(queryData)

    const [editarUsuario,
        { data: mutationData,
            loading: MutationLoading,
            error: mutationError }] = useMutation(EDITAR_USUARIO);

    const {setToken}=useAuth();
    const navigate= useNavigate();
    const {form, formData, updateFormData}=useFormData();

//

    const submitForm=(e)=>{
        e.preventDefault();
        console.log(formData) 
        formData._id = userData._id;
        formData.rolUsuario = userData.rol_usuario;
        editarUsuario({variables:{...formData}
        })
        };

    useEffect(()=>{
        if(mutationData){
        if(mutationData.editarUsuario.token){
            setToken(mutationData.editarUsuario.token);
            navigate('./private/MiPerfil');
        }
        };
    },[mutationData,setToken,navigate])

    useEffect(() => {
        console.log("datos del servidor: ", queryData);
    }, [queryData]);

    //encaso de que halla un error ejecute esto
    useEffect(() => {
        if (queryError) {
            <div> Error consultando Usuario</div>
        }
    }, [queryError])

    if (queryLoading) return <div>Cargando......</div>;
    
    return (
        <div>
        <Navbar />
        <div className='bg-gray-100 text-black'>
                    <section className='container mx-auto px-6'>
                <nav className='py-4 flex justify-between'>
                    <section className='flex flex-row justify-center'>
                        <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                        <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
                    </section>
                </nav>
                
                <section className='flex flex-row justify-between '>
                    <section className='flex flex-col px-20 py-1'>

                                        <h1 className='text-5xl font-bold pt-1'>
                                            TU PERFIL 
                                        </h1>

                                                <div className=' grid place-content-center bg-gray-100'>
                                                    <div className="w-full max-w-2xl m-6">
                                                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm} onChange={updateFormData} ref={form}>
                                                            
                                                            <div className="mb-4">
                                                                <label className="block text-blue-900 text-sm font-bold py-1" htmlFor="username">
                                                                    Nombre
                                                                </label>
                                                                <input name='nombreUsuario' className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" defaultValue={queryData.Usuario.nombre_usuario}/>

                                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Apellido">
                                                                    Apellido
                                                                </label>
                                                                <input name='apellidoUsuario' className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Apellido" type="text"  defaultValue={queryData.Usuario.apellido_usuario}/>
                                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Documento">
                                                                    Documento
                                                                </label>
                                                                <input name='documentoUsuario' className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="documento" type="number" defaultValue={queryData.Usuario.documento_usuario} />
                                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="grid-state">
                                                                    Tipo de documento
                                                                </label>
                                                                <div className="relative py-1">
                                                                    <select name="tipoDocumentoUsuario" className="block appearance-none w-full bg-white-200 border border-blue-900 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tipo-documento">
                                                                        <option>CEDULA_CIUDADANIA</option>
                                                                        <option>TARJETA_IDENTIDAD</option>
                                                                        <option>PASAPORTE</option>
                                                                    </select>
                                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                                        </div>
                                                                </div>

                                                                <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Correo">
                                                                    Correo electrónico
                                                                </label>
                                                                <input name='emailUsuario' className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="correo" type="text"   defaultValue={queryData.Usuario.email_usuario}/>
                                                                {/* <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="Estado">
                                                                    Contraseña
                                                                </label>
                                                                <input name='passwordUsuario' className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  defaultValue={queryData.Usuario.password_usuario} /> */}
                                                                <button type='submit'>  <a className="py-5 px-6 text-white font-bold rounded-full bg-blue-400 shadow-lg block md:inline-block">Editar información </a></button>

                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                    </section>
                            <section className=' item-row'>
                        <img src={imagenes.imag8} alt="lock"/>
                    </section>
                </section>
            </section>
        </div>
        </div>
    )
}
export default EditPerfil;