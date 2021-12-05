import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import imagenes from '../../../assets/img/imagenes';

function MiPerfil() {
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
                            <div class="w-full max-w-2xl m-6">
                                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div class="mb-4">
                                        <label class="block text-blue-900 text-sm font-bold py-1" for="username">
                                            Nombre
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Juan Sebastian" disabled="disabled" />
                                    </div>
                                    <div class="mb-6">
                                        <label class="block text-blue-900 text-sm font-bold mb-2" for="password">
                                            Apellido
                                        </label>
                                        <input class="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Gaviria Medina" disabled="disabled"/>
                                        <label class="block text-blue-900 text-sm font-bold mb-2" for="password">
                                            Documento
                                        </label>
                                        <input class="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="123456789" disabled="disabled"/>
                                        <label class="block text-blue-900 text-sm font-bold mb-2" for="password">
                                            Correo electrónico
                                        </label>
                                        <input class="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="juan.gaviria@pomodoro.com" disabled="disabled"/>
                                        <label class="block text-blue-900 text-sm font-bold mb-2" for="password">
                                            Estado
                                        </label>
                                        <input class="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Activo" disabled="disabled"/>
                                        <label class="block text-blue-900 text-sm font-bold mb-2" for="password">
                                            Rol
                                        </label>
                                        <input class="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Administrador" disabled="disabled"/>
                                        <button> <a href='/pruebaBack/editar/:_id' className="py-5 px-6 text-white font-bold rounded-full bg-blue-400 shadow-lg block md:inline-block">Editar información </a></button>

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

export default MiPerfil;