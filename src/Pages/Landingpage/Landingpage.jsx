import React from 'react';
import imagenes from '../../assets/img/imagenes';


function Landingpage() {
    return (
        <div className='bg-gray-500 text-white'>
            <section className='container mx-auto px-6'>
                <nav className='py-4 flex justify-between'>
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
                            <a href="/Login" className='px-2 font-bold'>
                                Login
                            </a>
                            <section className='w-0.5 h-6 bg-yellow-400 opacity-50'></section>
                            <button className="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Registro</button>
                        </section>
                    </section>
                </nav>

                <section className='flex flex-row justify-between '>
                    <section className='flex flex-col my-auto'>
                        <section className=''>
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
                </section>
                <section className='flex flex-row justify-between bg-gray-500 text-white'>
                    <section className='flex flex-row'>
                        <section>

                        </section>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default Landingpage
