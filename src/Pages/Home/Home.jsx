import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import imagenes from '../../assets/img/imagenes';



function Home() {
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
                    <section className='flex flex-row justify-center space-x-8'>
                        <section className='flex flex-row justify-center my-auto space-x-4'>
                            <a href="/MiPerfil" className='px-2 font-bold'>
                                Mi perfil
                            </a>
                            <a href="/gestionusuarios" className='px-2 font-bold'>
                                Gestión de Usuarios
                            </a>
                        </section>
                        <section className='flex flex-row justify-center items-center my-auto space-x-4'>
                            <section>
                                <div class="relative inline-block text-left">
                                    <div> 
                                        <button> <a href='./proyecto' class="inline-flex justify-center w-full rounded-md py-2 px-8 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Proyectos
                                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg></a>
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div class="py-1" role="none">
                                            <a href="/Proyecto/Consulta" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Consulta</a>
                                            <a href="/Proyecto/Registroproyectos" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Registro</a>
                                            <a href="/Proyecto/Inscripciones" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Inscripciones</a>
                                            <a href="/Proyecto/Avances" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Avances</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <a href="/" className='px-2 font-bold'>
                                Cerrar Sesión
                            </a>
                        </section>
                    </section>
                </nav>

                <section className='flex flex-row justify-between '>
                    <section className='flex item-center'>
                        <img src={imagenes.imag6} alt="lock"/>
                    </section>
                    <section className='w-2 h-25 bg-yellow-400 opacity-50'></section>
                    <section className='flex flex-col px-20 py-10'>
                        <h1 className='text-5xl font-bold pt-5'>
                            Aquí encontraras todo lo que necesitas. 
                            ¿Está todo listo?
                        </h1>
                        <p className='text-2xl pt-8  opacity-100'>
                            Crea, comparte, actualiza y gestiona tus proyectos con Pomodoro
                        </p>

                    </section>
                    <section className='w-2 h-25 bg-yellow-400 opacity-50'></section>
                    <section className='flex flex-col pt-8 px-20 py-10'>
                            <p className='text-3xl font-bold pt-10'>
                                ¿Necesitas ayuda?
                            </p>
                            <p className='text-2xl pt-8  opacity-100'>
                            Cuentanos en que podemos ayudarte o dejanos tus comentarios
                            </p>
                            <section className='inline-flex items-center px-8 py-6'>
                                <button className="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Soporte</button>
                            </section>                        
                        </section>
                </section>
                <section className='flex flex-row justify-between bg-gray-500 text-white'>
                    <section className='flex flex-row'>
                        <section>

                        </section>
                    </section>
                </section>
            </section>

        </div>
        </div>
    )
}
export default Home
