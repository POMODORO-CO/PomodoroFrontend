import React from "react";
import imagenes from "../../assets/img/imagenes";
import { NavLink } from 'react-router-dom';

function Registro() {
  return (
    <div>
        <section className='container mx-auto px-6'>
          <nav className='py-4 flex justify-between'>
            <section className='flex flex-row justify-center'>
              <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
              <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro</h1>
            </section>
            <section className='flex flex-row justify-center space-x-8'>
              <section className='flex flex-row justify-center my-auto space-x-4'>
                <a href='#' className='px-2 font-bold'>Servicios</a>
                <a href="#" className='px-2 font-bold'>Experiencias</a>
                <a href="#" className='px-2 font-bold'>Metodología</a>
                <a href="#" className='px-2 font-bold'>Herramientas</a>
              </section>
              <section className='flex flex-row justify-center items-center my-auto space-x-4'>
                <NavLink to='/Login' className='px-2 font-bold' >
                  Login
                </NavLink>
                <section className='w-0.5 h-6 bg-yellow-400 opacity-50'></section>
                <NavLink to='/Registro'>
                  <button class="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Registro</button>
                </NavLink>
              </section>
            </section>
          </nav>
        </section>
      <section className='min-h-screen grid place-content-center bg-gray-500'>
        <form class="w-full max-w-lg ">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="text-white text-sm font-bold mb-2" for="grid-state">
                Tipo de documento
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-500 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tipo-documento">
                  <option>Cédula</option>
                  <option>Tarjeta de identidad</option>
                  <option>Pasaporte</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="text-white text-sm font-bold mb-2" for="nombres">
                Nombres
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-primer-nombre" type="text" placeholder="Ivonne" />
              <p class="text-red-500 text-xs">Por favor diligencie los datos.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="text-white text-sm font-bold mb-2" for="grid-segundo-nombre">
                Apellidos
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-apellido" type="text" placeholder="Calpa" />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="text-white text-sm font-bold mb-2" for="grid-state">
                Tipo de usuarios
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-500 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tipo-usuario">
                  <option>Estudiante</option>
                  <option>Líder de proyecto</option>
                  <option>Administrador</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="text-white text-sm font-bold mb-2" for="grid-contraseña">
                Usuario
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="correo@correo.com" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="text-white text-sm font-bold mb-2" for="password">
                Contraseña
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-passwor" type="password" placeholder="***********" />
              <p class="text-red-500 text-xs">Por favor diligencie los datos.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="text-white text-sm font-bold mb-2" for="grid-segundo-nombre">
                Confirmar contraseña
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-passwor" type="password" placeholder="***********" />
            </div>
            <div class="w-full px-3 mb-6 md:mb-0">
              <button class="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
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
