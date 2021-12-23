import React from 'react';
import imagenes from '../../assets/img/imagenes';
import { NavLink } from 'react-router-dom';


function Landingpage() {
    return (
        <div className='bg-gray-500 text-white min-h-screen'>
            <section className='container mx-auto px-10'>
                <nav className='py-12 flex justify-between'>
                    <section className='flex flex-row justify-center'>
                        <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                        <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
                    </section>
                    <section className='flex flex-row justify-center space-x-8'>
                        <section className='flex flex-row justify-center my-auto space-x-4'>
                            <a href="/Servicios" className='px-2 font-bold'>
                                Servicios
                            </a>
                            <a href="/Experiencias" className='px-2 font-bold'>
                                Experiencias
                            </a>
                            <a href="/Metodología" className='px-2 font-bold'>
                                Metodología
                            </a>
                            <a href="/Herramientas" className='px-2 font-bold'>
                                Herramientas
                            </a>
                        </section>
                        <section className='flex flex-row justify-center items-center my-auto space-x-4'>
                            <NavLink to='/Login' className='px-2 font-bold'>
                                Login
                            </NavLink>
                            <section className='w-0.5 h-6 bg-yellow-400 opacity-50'></section>
                            <NavLink to='/Registro'>
                            <button className="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Registro</button>
                            </NavLink>
                        </section>
                    </section>
                </nav>

                <section className='flex flex-row justify-between '>
                    <section className='flex flex-col my-auto'>
                        <section>
                            <section className='bg-white inline-flex justify-center items-center rounded-full'>
                                <section className='bg-white text-black font-semibold px-2 rounded-full m-1 '>
                                    ¡ES TIEMPO!
                                </section>
                                <p className='text-black px-3 py-2 bg-yellow-400 rounded-full m-1 font-bold'> de administrar tu proyecto</p>
                            </section>
                        </section>
                        <h1 className='text-7xl font-bold pt-8'>
                            Descubre tu pasión en un proyecto
                        </h1>
                        <p className='pt-8 md:w-1/2 opacity-100'>
                            Un proyecto solo lo entiendes cuando entiendes su alcance
                        </p>
                        <section className='inline-flex items-center px-8 py-6'>
                            <button className="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Activa tu demo</button>
                        </section>
                    </section>
                    <section>
                        <img src={imagenes.imag5} alt="lock"/>
                    </section>
                    <section className='flex flex-row justify-between'>
                        <section className='flex flex-row'>
                            <section className='bg-white h-20 w-20 p-6 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </section>
                        </section>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default Landingpage
