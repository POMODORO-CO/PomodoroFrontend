import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar'
import imagenes from '../../assets/img/imagenes';
import Logout from '../../components/Logout/Logout'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import PrivateComponent from '../../components/PrivateComponent/PrivateComponent';

function Home() {
    return (

        <div >
            <PrivateRoute rolelist={["ESTUDIANTE", "ADMINISTRADOR", "LIDER"]}>
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
                                    <NavLink to="/private/MiPerfil" className='px-2 font-bold'>
                                        Mi perfil
                                    </NavLink>
                                    <PrivateComponent rolelist={["ADMINISTRADOR","LIDER"]}>
                                        <NavLink to="/private/gestionusuarios" className='px-2 font-bold'>
                                            Gestión de Usuarios
                                        </NavLink>
                                    </PrivateComponent>
                                </section>
                                <section className='flex flex-row justify-center items-center my-auto space-x-4'>
                                    <section>
                                        <div className="relative inline-block text-left">
                                            <div className="justify-center w-full rounded-full py-2 px-6 text-blue-900 font-bold bg-yellow-400 shadow-lg block md:inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                <div>
                                                <NavLink to="/private/proyecto" className="text-gray-700 block px-4 py-2 text-base" role="menuitem" tabIndex="-1" id="menu-item-1">Proyectos</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div className='px-2 font-bold'>
                                        <Logout />
                                    </div>
                                </section>
                            </section>
                        </nav>

                        <section className='flex flex-row justify-between '>
                            <section className='flex item-center'>
                                <img src={imagenes.imag6} alt="lock" />
                            </section>
                            <section className='w-2 h-25 bg-yellow-400 opacity-50'></section>
                            <section className='flex flex-col px-20 py-10'>
                                <h1 className='text-3xl font-bold pt-5'>
                                    Aquí encontrarás todo lo que necesitas.
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
            </PrivateRoute>
        </div>

    )
}
export default Home
