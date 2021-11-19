import React from 'react'

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="container mx-auto">
                <div className="text-center text-3xl leading-9 font-extrabold text-gray-800">
                    ¡Bienvenid@s!
                </div>
                <div className="text-center text-teal-400 m-4"> Inicio de sesión</div>
                <form >
                    <div className="flex justify-center">
                        <div className="lg:w-1/3 md:w-2/3 w-full">
                            <label className="block uppercase tracking-wide text- text-xs font-bold mb-2"
                                htmlFor="email" >
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="test.js@gmail.com"
                                className="bg-gray-300 border-gray-600 rounded w-full py-2 px-2 text-gray-700"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <div className="lg:w-1/3 md:w-2/3 w-full">
                            <label
                                className="block uppercase tracking-wide text-xs font-bold mb-2"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*********"
                                className="bg-gray-300 border-gray-600 rounded w-full py-2 px-2 text-gray-700"
                                required
                            />
                            <label class="inline-flex items-center text-ls py-2">
                                <input type="checkbox" class="form-checkbox"/>
                                <span class="ml-2">Recordar contraseña</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button class="
                            lg:w-1/3 md:w-2/3 w-full
                            py-2 
                            px-20 
                            font-semibold 
                            rounded-lg 
                            shadow-md 
                            text-white 
                            hover:text-blue-900 
                            bg-blue-900 
                            hover:bg-yellow-400">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
            </div>
    )
}
export default Login
