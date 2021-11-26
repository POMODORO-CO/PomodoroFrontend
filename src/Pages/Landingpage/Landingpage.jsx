import React from 'react';
import imagenes from '../../assets/img/imagenes';

function Landingpage() {
    return (
        <body className='bg-gray-500 text-white'>
            <div className='container mx-auto px-2'>
                <nav className='py-8 flex justify-between'>
                    <div className='flex flex-row justify-center'>
                        <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-28 w-28' />
                        <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro</h1>
                    </div>
                    <div className='flex flex-row justify-center space-x-8'>
                        <div className='flex flex-row justify-center my-auto space-x-4'>
                            <a href="#" className='px-2 font-bold'>
                                Servicios
                            </a>
                            <a href="#" className='px-2 font-bold'>
                                Experiencias
                            </a>
                            <a href="#" className='px-2 font-bold'>
                                Metodología
                            </a>
                            <a href="#" className='px-2 font-bold'>
                                Herramientas
                            </a>
                        </div>
                        <div className='flex flex-row justify-center items-center my-auto space-x-4'>
                            <a href="#" className='px-2 font-bold'>
                                Login
                            </a>
                            <div className='w-0.5 h-6 bg-yellow-400 opacity-50'></div>
                            <button class="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Registro</button>
                        </div>
                    </div>
                </nav>

                <div className='flex flex-row justify-between '>
                    <div className='flex flex-col'>
                        <div className=''>
                            <div className='bg-white inline-flex justify-center items-center rounded-full'>
                                <div className='bg-white text-black font-semibold px-2 rounded-full m-1 '>
                                    ¡ES TIEMPO!
                                </div>
                                <p className='text-black px-3 py-3 bg-yellow-400 rounded-full m-1 font-bold'>De administrar tu proyecto</p>
                            </div>
                        </div>
                        <h1 className='text-7xl font-bold pt-8'>
                            Descubre tu pasión en un proyecto
                        </h1>
                        <p className='pt-8 md:w-1/2 opacity-100'>
                            Un proyecto solo lo entiendes cuando entiendes su alcance
                        </p>
                        <section className='inline-flex items-center px-8 py-6'>
                        <button class="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Activa tu demo</button>
                        </section>
                    </div>
                    <div className=''>
                        <img src={imagenes.imag5} />
                    </div>
                </div>
            </div>
        </body>

    )
}

export default Landingpage
