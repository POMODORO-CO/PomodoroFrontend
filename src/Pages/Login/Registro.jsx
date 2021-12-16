import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router";

import NavbarLandingPage from '../../components/NavbarLandingPage/NavbarLandingPage';
import useFormData from '../../components/UseForm/useForm.js';
import { REGISTRO } from "../../graphql/Auth/mutationsAuth";
import { useAuth } from "../../context/authContext";


function Registro() {

  const {setToken}=useAuth();
  const navigate= useNavigate();

  const {form, formData, updateFormData}=useFormData();

  const [registro,
    { data: mutationData,
        loading: MutationLoading,
        error: mutationError }] = useMutation(REGISTRO);

  const submitForm=(e)=>{
    e.preventDefault();
    registro({variables:{...formData}
    })
  };

  useEffect(()=>{
  
    if(mutationData){
      if(mutationData.registro.token){
        setToken(mutationData.registro.token);
        navigate('/Login');
      }
    };
    
  },[mutationData,setToken,navigate])


  return (
    <div>
      <NavbarLandingPage />
      <section className='min-h-screen grid place-content-center bg-gray-500'>
        <form className="w-full max-w-lg" onSubmit={submitForm} onChange={updateFormData} ref={form}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-white text-sm font-bold mb-2" htmlFor="grid-state">
                Tipo de documento
              </label>
              <div className="relative">
                <select name="tipoDocumentoUsuario" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-500 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tipo-documento">
                  <option>CEDULA_CIUDADANIA</option>
                  <option>TARJETA_IDENTIDAD</option>
                  <option>PASAPORTE</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="text-white text-sm font-bold mb-2" htmlFor="grid-numero">
                Numero 
              </label>
              <input name='documentoUsuario' className="appearance-none block w-full bg-gray-200 text-gray-500 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-numero" type="number" placeholder="numero de documento" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-white text-sm font-bold mb-2" htmlFor="nombres">
                Nombres
              </label>
              <input name='nombreUsuario' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-primer-nombre" type="text" placeholder="Nombres Usuario" />
              <p className="text-red-500 text-xs">Por favor diligencie los datos.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="text-white text-sm font-bold mb-2" htmlFor="grid-segundo-nombre">
                Apellidos
              </label>
              <input name='apellidoUsuario' className="appearance-none block w-full bg-gray-200 text-gray-500 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-apellido" type="text" placeholder="Apellidos Usuario" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-white text-sm font-bold mb-2" htmlFor="grid-state">
                Rol de usuarios
              </label>
              <div className="relative">
                <select name='rolUsuario' className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-500 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tipo-usuario">
                  <option>ESTUDIANTE</option>
                  <option>LIDER</option>
                  <option>ADMINISTRADOR</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="text-white text-sm font-bold mb-2" htmlFor="grid-contraseña">
                Usuario
              </label>
              <input name='emailUsuario' className="appearance-none block w-full bg-gray-200 text-gray-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="correo@correo.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-white text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input name='passwordUsuario' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-passwor" type="password" placeholder="***********" />
              <p className="text-red-500 text-xs">Por favor diligencie los datos.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="text-white text-sm font-bold mb-2" htmlFor="grid-segundo-nombre">
                Confirmar contraseña
              </label>
              <input name='passwordUsuario' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-passwor" type="password" placeholder="***********" />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <button className="appearance-none block w-full bg-yellow-400 hover:bg-gray-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type='submit'>
                Registrar usuario
              </button>
            </div>
          </div>

        </form>

      </section>
    </div>
  )
}

export default Registro
