import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import imagenes from '../../assets/img/imagenes';
import PrivateComponent from '../../components/PrivateComponent/PrivateComponent';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

function Project() {
    return (
        <PrivateRoute rolelist={["LIDER", "ADMINISTRADOR", "ESTUDIANTE"]}>
            <div>
                <Navbar />
                <div className='bg-gray-300 text-black'>
                    <section className='container mx-auto px-6'>
                        <nav className='py-4 flex justify-between'>
                            <section className='flex flex-row justify-center'>
                                <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                                <h1 className='px-2 text-xl text-center text-gray-700 my-auto uppercase font-bold'>Pomodoro Projects</h1>
                            </section>
                        </nav>

                        <section className='flex flex-row justify-between '>
                            <section className='flex flex-col px-20 py-1'>
                                <h1 className='text-5xl text-gray-700 font-bold pt-1 flex flex-row justify-center'>
                                    MODULO DE GESTIÓN DE PROYECTOS
                                </h1>
                                <p className='text-2xl pt-8 text-gray-700 opacity-100 flex flex-row justify-center'>
                                    Elige alguna de las siguientes opciones
                                </p>

                                <section className='flex flex-col pt-5 px-20 py-1'>
                                    <section className='flex flex-row justify-center my-auto space-x-10 items-center px-8 py-6'>
                                        <PrivateComponent rolelist={["LIDER", "ADMINISTRADOR", "ESTUDIANTE"]}>
                                            <button> <a href='/private/Proyecto/Consulta' className="py-1 px-10 text-gray-700 font-bold rounded-full bg-yellow-400 shadow md:shadow-2xl block md:inline-block">Consultar Proyectos </a></button>
                                        </PrivateComponent>
                                        <PrivateComponent rolelist={["LIDER"]}>
                                            <button> <a href="/private/Proyecto/Registroproyectos" className="py-1 px-10 text-gray-700 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Registrar Proyecto</a></button>
                                        </PrivateComponent>
                                        
                                        <PrivateComponent rolelist={["ESTUDIANTE"]}>
                                            <button> <a href="/private/Proyecto/Inscripciones" className="py-1 px-10 text-gray-700 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Inscribir Proyecto</a></button>
                                        </PrivateComponent>
                                        <PrivateComponent rolelist={["LIDER","ESTUDIANTE"]}>
                                            <button> <a href="/private/Proyecto/Avances" className="py-1 px-10 text-gray-700 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Avances de Proyecto</a></button>
                                        </PrivateComponent>
                                        <PrivateComponent rolelist={["LIDER","ESTUDIANTE"]}>
                                            <button> <a href="/private/Proyecto/AprobarRegistro" className="py-1 px-12 text-gray-700 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Gestión de Registros</a></button>
                                        </PrivateComponent>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className='flex item-center'>
                        <img src={imagenes.imag7} alt="lock" />
                    </section>
                </div>
            </div>
        </PrivateRoute>
    )
}

export default Project;