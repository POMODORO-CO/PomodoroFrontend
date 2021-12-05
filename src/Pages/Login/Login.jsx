import React from 'react'

const Login = () => {
    return (
        <div className='min-h-screen grid place-content-center bg-gray-100'>
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
                        <button> <a href='./home' class="bg-blue-900 hover:bg-yellow-400 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                            Ingresar
                        </a></button>
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
    )
}

export default Login

