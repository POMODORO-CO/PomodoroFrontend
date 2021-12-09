import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import imagenes from '../../assets/img/imagenes';
import * as FaIcons from "react-icons/fa";


function InfoProyecto() {
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
                        <h1 className='text-3xl font-bold pt-1 py-5'>
                            PERFIL DEL PROYECTO:  
                        </h1>
                        <label className="text-2xl text-center block text-blue-900 text-sm font-bold py-1" htmlFor="username">
                                                PomodoroAPP
                                            </label>
                        <div className=' grid place-content-center bg-gray-100'>
                            <div className="w-full max-w-2xl m-6">
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                        <label className="block text-blue-900 text-sm font-bold py-1" htmlFor="username">
                                            ID del Proyecto
                                        </label>
                                        <input className="shadow appearance-none border-blue-900 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="001" disabled="disabled" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-blue-900 text-sm font-bold py-1" htmlFor="username">
                                            Nombre del Proyecto
                                        </label>
                                        <input className="shadow appearance-none border-blue-900 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="PomodoroAPP" disabled="disabled" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
                                            Líder del Proyecto
                                        </label>
                                        <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Florinda Mesa" disabled="disabled"/>
                                        <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
                                            Estado del Proyecto
                                        </label>
                                        <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="ACTIVO" disabled="disabled"/>
                                        <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
                                            Objetivos del Proyecto
                                        </label>
                                        <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Optimizar Tiempo" disabled="disabled"/>
                                        <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
                                            Fases del Proyecto
                                        </label>
                                        <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Desarrollo" disabled="disabled"/>
                                        <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
                                            Presupuesto
                                        </label>
                                        <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="$120" disabled="disabled"/>
                                        <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
                                            Fecha Inicio
                                        </label>
                                        <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="date" placeholder="Administrador" disabled="disabled"/>
                                        <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
                                            Fecha Final
                                        </label>
                                        <input className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="date" placeholder="Administrador" disabled="disabled"/>
                                        <button> <a href='/' className="py-5 px-6 text-white font-bold rounded-full bg-blue-400 shadow-lg block md:inline-block">Editar información </a></button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className=' item-row'>
                        
                    <div className="flex items-center flex-col text-middle">

                    <label className="text-2xl block text-blue-900 text-sm font-bold py-7" htmlFor="username">
                                                Listado de Avances del Proyecto
                                            </label>
<div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
    <div className="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
        <div
            className="
            shadow
            overflow-hidden
            border-b border-gray-200
            sm:rounded-lg
            "
        >
            <table className="min-w-auto divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>


                        <th
                                scope="col"
                                className="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                        "
                        >
                            Usuario Avance
                        </th>
                        <th
                                scope="col"
                                className="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                        "
                        >
                            Descripción 
                        </th>
                        <th
                                scope="col"
                                className="
  px-6
  py-3
  text-left text-xs
  font-medium
  text-gray-500
  uppercase
  tracking-wider
"
                        >
                            Observaciones 
                        </th>
                        <th
                                scope="col"
                                className="
  px-6
  py-3
  text-left text-xs
  font-medium
  text-gray-500
  uppercase
  tracking-wider
"
                        >
                            Fecha Avance 
                        </th>
                        
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-900">Usuario</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-900">Actualización presupuesto</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-900">Cambio por nueva línea</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-900">10/10/2022</div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
                    </section>
                </section>

            </section>

        </div>
        </div>

    )
}

export default InfoProyecto;