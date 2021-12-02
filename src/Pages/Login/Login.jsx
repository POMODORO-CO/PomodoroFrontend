import React from 'react'
import imagenes from '../../assets/img/imagenes';
import { NavLink } from 'react-router-dom';

const Login = () => {
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
        <div className='min-h-screen grid place-content-center bg-gray-500'>
            <div class="w-full max-w-xs m-6">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <img class="w-20 h-20 rounded-full mx-auto m-5" src="https://images.pexels.com/photos/2589649/pexels-photo-2589649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile" />
                        <label class="block text-blue-900 text-sm font-bold py-1" for="username">
                            Correo electrónico
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Correo electrónico" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-blue-900 text-sm font-bold mb-2" for="password">
                            Contraseña
                        </label>
                        <input class="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*******" />
                        <p class="text-yellow-400 text-xs italic p-1">Por favor ingrese su contraseña.</p>
                        <button class="bg-blue-900 hover:bg-yellow-400 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                            Ingresar
                        </button>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox"/>
                            <span class="ml-2">Recordar contraseña</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between my-3">
                        <a class="inline-block align-baseline font-bold text-sm text-blue-900 hover:text-blue-800" href="/forgot">
                            Olvidó su contraseña?
                        </a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login

