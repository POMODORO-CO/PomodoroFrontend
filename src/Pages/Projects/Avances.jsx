import React from 'react'
import "../../index.css";
import Navbar from '../../components/Navbar/Navbar'
import * as FaIcons from "react-icons/fa";
import imagenes from '../../assets/img/imagenes';

// import * as CgIcons from "react-icons/cg";
// import * as RiIcons from "react-icons/ri";

function Avances() {

    return (
        
        <div>
            <Navbar />
            <section className='flex flex-row justify-center'>
                        <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                        <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
                    </section>
                    <section className='text-center '>
                            <h1 className='text-3xl font-bold pt-1'>
                                MODULO DE REGISTRO DE AVANCES
                            </h1>
                    </section>
            <div className="flex items-center flex-col text-middle">

                <div className="box pt-6">
                    <div className="box-wrapper">

                        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                            <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            <input type="search" name="" id="" placeholder="Buscar.." x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                            <div className="select">
                                <select name="" id="" x-model="image_type" className="text-sm outline-none focus:outline-none bg-transparent">
                                    <option value="all" selected>Todo</option>
                                    <option value="photo">ID</option>
                                    <option value="illustration">Nombre del proyecto</option>
                                    <option value="vector">Líder</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>


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
                                                        text-center text-xs
                                                        font-medium
                                                        text-gray-500
                                                        uppercase
                                                        tracking-wider
                                                        "
                                        >
                                            ID
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
                                            Nombre del proyecto
                                        </th>
                                        <th
                                            scope="col"
                                            className="
                                                        px-6
                                                        py-3
                                                        text-center text-xs
                                                        font-medium
                                                        text-gray-500
                                                        uppercase
                                                        tracking-wider
                                                        "
                                        >
                                            Líder
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
                                            Usuario 
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
                                        <th
                                            scope="col"
                                            className="
                                                        px-6
                                                        py-3
                                                        text-center text-xs
                                                        font-medium
                                                        text-gray-500
                                                        uppercase
                                                        tracking-wider
                                                        "
                                        >
                                            Acciones
                                        </th>
                                        {/* <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th> */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className="
                                                            px-2
                                                            inline-flex
                                                            text-xs
                                                            leading-5
                                                            font-semibold
                                                            rounded-full
                                                            bg-green-100
                                                            text-green-800
                                                        "
                                            >
                                                001
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">PomodoroAPP</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-center text-sm font-medium text-gray-900">
                                                        Florinda Mesa
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        flora.mesa@pomodoro.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-center text-gray-900">UsuarioActual</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type='text' className="text-sm text-gray-900" placeholder='Indique descripción'/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type='text' className="text-sm text-gray-900" placeholder='Indique observación'/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type='date' className="text-sm text-gray-900" placeholder='Indique descripción'/>
                                        </td>
                                        <td
                                            className="
                                                        px-6
                                                        py-4
                                                        whitespace-nowrap
                                                        text-center text-sm
                                                        font-medium
                                                        "
                                        >
                                            <a href="/cosas2" className="inline-block"
                                            ><FaIcons.FaSave size={30} /></a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Avances;